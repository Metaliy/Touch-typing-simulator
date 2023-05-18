import css from './ResultsItem.module.css'

type Props = {
  time: number
  accuracy: string
  incorrectSymbolsCount: number
  speed: number
  languare: string
  dateString: string | null
}

export function ResultsItem({
  time,
  accuracy,
  incorrectSymbolsCount,
  speed,
  languare,
  dateString,
}: Props) {
  const seconds = time % 60
  const minutes = Math.floor(time / 60)
  const timer = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

  return (
    <div className={css.root}>
      <div className={css.resultlistItem}>
        <p>{timer}</p>
      </div>
      <div className={css.resultlistItem}>
        <p>{accuracy}%</p>
      </div>
      <div className={css.resultlistItem}>
        <p>{incorrectSymbolsCount}</p>
      </div>
      <div className={css.resultlistItem}>
        <p>
          {speed} <span className={css.units}>зн./мин</span>
        </p>
      </div>
      <div className={css.resultlistItem}>
        <p>{languare}</p>
      </div>
      <div className={css.resultlistItem}>
        <p>{dateString}</p>
      </div>
    </div>
  )
}
