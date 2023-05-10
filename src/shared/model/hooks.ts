import { useEffect, useState } from 'react'
import {
  useSelector,
  type TypedUseSelectorHook,
  useDispatch,
} from 'react-redux'

export const useAppDispatch = useDispatch<AppDispatch>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type StopwatchReturnType = {
  time: number
  start: () => void
  stop: () => void
  reset: () => void
}

export function useStopwatch(): StopwatchReturnType {
  const [time, setTime] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 1)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isRunning])

  const start = (): void => {
    setIsRunning(true)
  }

  const stop = (): void => {
    setIsRunning(false)
  }

  const reset = (): void => {
    setTime(0)
  }

  return { time, start, stop, reset }
}
