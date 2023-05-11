import { type MouseEventHandler } from 'react'
import css from './Statistic.module.css'

type Props = {
  timer: number
  symbolCount: number
  correctSymbolsCount: number
  incorrectSymbolsCount: number
  isFinished: boolean
  onRestartButtonClick: MouseEventHandler<HTMLButtonElement>
}

export function Statistic({
  timer,
  correctSymbolsCount,
  incorrectSymbolsCount,
  symbolCount,
  isFinished,
  onRestartButtonClick,
}: Props) {
  const seconds = timer % 60
  const minutes = Math.floor(timer / 60)
  const time = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  const accuracy = ((1 - incorrectSymbolsCount / symbolCount) * 100).toFixed(2)
  const speed = Math.floor((correctSymbolsCount / timer) * 60)
  return (
    <div className={css.root}>
      {isFinished ? (
        <p className={css.head}>Ваши результаты.</p>
      ) : (
        <p className={css.head}>
          Результаты будут доступны после полного завершения тестирования.
        </p>
      )}
      <div className={css.statisticContainer}>
        <div className={css.statisticElementContainer}>
          <span
            className={
              isFinished ? css.statisticValue : css.statisticValueDisabled
            }
          >
            {isFinished ? time : '0:00'}
          </span>
          <img
            className={css.statisticIcon}
            src="/images/time-icon.svg"
            width={82}
            height={82}
            alt=""
          />
          <p className={css.statisticName}>Итоговое время</p>
        </div>

        <div className={css.statisticElementContainer}>
          <span
            className={
              isFinished ? css.statisticValue : css.statisticValueDisabled
            }
          >
            {isFinished ? accuracy : '0'}%
          </span>
          <img
            className={css.statisticIcon}
            src="/images/correct-icon.svg"
            width={82}
            height={82}
            alt=""
          />
          <p className={css.statisticName}>Точность ввода</p>
        </div>

        <div className={css.statisticElementContainer}>
          <span
            className={
              isFinished ? css.statisticValue : css.statisticValueDisabled
            }
          >
            {isFinished ? incorrectSymbolsCount : '0'}
          </span>
          <img
            className={css.statisticIcon}
            src="/images/wrong-icon.svg"
            width={82}
            height={82}
            alt=""
          />
          <p className={css.statisticName}>Количество ошибок</p>
        </div>

        <div className={css.statisticElementContainer}>
          <span
            className={
              isFinished ? css.statisticValue : css.statisticValueDisabled
            }
          >
            {isFinished ? speed : '0'}{' '}
            <span className={css.units}>зн./мин</span>
          </span>
          <img
            className={css.statisticIcon}
            src="/images/speed-icon.svg"
            width={82}
            height={82}
            alt=""
          />
          <p className={css.statisticName}>Скорость печати</p>
        </div>
      </div>
      <button
        disabled={timer === 0}
        className={css.retryButton}
        onClick={onRestartButtonClick}
      >
        {isFinished ? 'Повторить тестирование' : 'Начать заново'}
      </button>
    </div>
  )
}
