import dayjs from 'dayjs'
import { type RefObject, useEffect, useRef, useState } from 'react'
import { addNewResult } from '@/entities/Results/model/slice'
import {
  PausePopup,
  SimulatorPreview,
  Statistic,
  TypedText,
} from '@/entities/simulator'
import { fetchTypedText } from '@/entities/simulator/api/typedTextApi'
import { selectTypedText } from '@/entities/simulator/model/slice'
import { SimulatorView, TypingLanguare } from '@/shared/lib/config'
import { useAppDispatch, useAppSelector } from '@/shared/model'
import { useStopwatch } from '@/shared/model/hooks'
import css from './SimulatorArea.module.css'

export function SimulatorArea() {
  const dispatch = useAppDispatch()

  const typedText = Array.from(useAppSelector(selectTypedText))
  const [correctSymbolCount, setCorrectSymbolCount] = useState(0)
  const [wrongSymbolIndex, setWrongSymbolIndex] = useState(-1)
  const [currentView, setCurrentView] = useState(SimulatorView.Instruction)
  const [isReady, setIsReady] = useState(false)
  const [incorrectSymbolCount, setIncorrectSymbolCount] = useState(0)
  const [isInProgress, setIsInProgress] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [isPause, setIsPause] = useState(false)
  const [currentResult, setCurrentResult] = useState({
    seconds: 0,
    accuracy: '0',
    incorrectSymbolsCount: 0,
    speed: 0,
    languare: '',
    date: '',
  })
  const statisticRef = useRef<HTMLDivElement>(null)
  const simulatorRef = useRef<HTMLDivElement>(null)

  const { time, start, stop, reset } = useStopwatch()

  const pauseTesting = (isPause: boolean) => {
    if (isPause) {
      setIsPause(true)
      stop()
      return
    }
    if (!isPause) {
      setIsPause(false)
      start()
    }
  }

  useEffect(() => {
    dispatch(fetchTypedText())
  }, [])

  useEffect(() => {
    if (isFinished) {
      setCurrentResult({
        seconds: time,
        accuracy: (
          (1 - incorrectSymbolCount / correctSymbolCount) *
          100
        ).toFixed(2),
        incorrectSymbolsCount: incorrectSymbolCount,
        speed: Math.floor((correctSymbolCount / time) * 60),
        languare: TypingLanguare.Russian,
        date: dayjs().format('DD.MM.YYYY'),
      })
    }
  }, [isFinished])

  useEffect(() => {
    if (isFinished) {
      dispatch(addNewResult(currentResult))
    }
  }, [currentResult])

  const getClass = (
    currentSymbolIndex: number,
    correctSymbolCount: number,
    wrongSymbolIndex: number
  ) => {
    switch (true) {
      case wrongSymbolIndex === currentSymbolIndex:
        return css.errorSymbol
      case currentSymbolIndex < correctSymbolCount:
        return css.correctSymbol
      case currentSymbolIndex === correctSymbolCount:
        return css.currentSymbol
      case currentSymbolIndex < typedText.length:
        return css.targetSymbol
    }
  }

  const checkTypedSymbol = (
    evt: React.KeyboardEvent,
    typedText: string[],
    correctSymbolCount: number,
    incorrectSymbolCount: number,
    isInProgress: boolean,
    isReady: boolean,
    statisticRef: RefObject<HTMLDivElement>
  ) => {
    if (evt.key === ' ') {
      evt.preventDefault()
    }

    if (isReady && evt.key === ' ' && correctSymbolCount === 0) {
      start()
      setCurrentView(SimulatorView.TypedText)
      setIsInProgress(true)
      return
    }

    if (!isInProgress || !isReady) {
      return
    }

    if (correctSymbolCount === typedText.length - 1 && statisticRef.current) {
      stop()
      setIsInProgress(false)
      setIsFinished(true)
      statisticRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const regex = /(Arrow|Control|Alt|Shift|Escape|Tab|Enter)$/g
    if (regex.test(evt.key)) {
      return
    }

    if (evt.key !== typedText[correctSymbolCount]) {
      setIncorrectSymbolCount(incorrectSymbolCount + 1)
      setWrongSymbolIndex(correctSymbolCount)
      return
    }
    if (
      evt.key === typedText[correctSymbolCount] &&
      currentView === SimulatorView.TypedText
    ) {
      setWrongSymbolIndex(-1)
      setCorrectSymbolCount(correctSymbolCount + 1)
    }
  }

  const restartSimulator = () => {
    reset()
    setCorrectSymbolCount(0)
    setWrongSymbolIndex(-1)
    setCurrentView(SimulatorView.Instruction)
    setIncorrectSymbolCount(0)
    setIsInProgress(false)
    setIsFinished(false)
    setIsPause(false)
    dispatch(fetchTypedText())
    if (simulatorRef.current) {
      simulatorRef.current.focus()
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className={css.root}>
      <h2 className={css.head}>Тренировка скорости печати</h2>
      <div
        onBlur={(evt) => {
          if (!evt.currentTarget.contains(evt.relatedTarget as Node | null)) {
            pauseTesting(true)
          }
        }}
        onFocus={() => {
          if (isPause && !isFinished) {
            pauseTesting(false)
          }
        }}
        ref={simulatorRef}
        className={css.textContainer}
        onKeyDown={(evt) => {
          checkTypedSymbol(
            evt,
            typedText,
            correctSymbolCount,
            incorrectSymbolCount,
            isInProgress,
            isReady,
            statisticRef
          )
        }}
        tabIndex={0}
      >
        {(isPause && isReady && !isFinished && isInProgress) ||
        (isPause && isReady && !isFinished) ? (
          <PausePopup />
        ) : (
          ''
        )}
        {currentView === SimulatorView.Instruction ? (
          <SimulatorPreview onReadyButtonClick={setIsReady} isReady={isReady} />
        ) : (
          <TypedText
            typedText={typedText}
            getClass={getClass}
            correctSymbolCount={correctSymbolCount}
            wrongSymbolIndex={wrongSymbolIndex}
          />
        )}
      </div>
      <h2 ref={statisticRef} className={css.head}>
        Результаты
      </h2>
      <Statistic
        result={{
          timer: currentResult.seconds,
          accuracy: currentResult.accuracy,
          incorrectSymbolsCount: currentResult.incorrectSymbolsCount,
          speed: currentResult.speed,
        }}
        isFinished={isFinished}
        onRestartButtonClick={restartSimulator}
      />
    </div>
  )
}
