import { clearResults, selectResults } from '@/entities/Results/model/slice'
import { ResultsItem } from '@/entities/Results/ui/ResultsItem/ResultsItem'
import { useAppDispatch, useAppSelector } from '@/shared/model'
import css from './ResultsList.module.css'

export function ResultsList() {
  const results = useAppSelector(selectResults)
  const dispatch = useAppDispatch()

  return (
    <div className={css.root}>
      <h2 className={css.head}>10 последних результатов</h2>
      <div className={css.listHeaders}>
        <div className={css.listHeadersItem}>
          <p>Итоговое время</p>
          <img
            className={css.statisticIcon}
            src="/images/time-icon.svg"
            width={82}
            height={82}
            alt=""
          />
        </div>
        <div className={css.listHeadersItem}>
          <p>Точность ввода</p>
          <img
            className={css.statisticIcon}
            src="/images/correct-icon.svg"
            width={82}
            height={82}
            alt=""
          />
        </div>
        <div className={css.listHeadersItem}>
          <p>Количество ошибок</p>
          <img
            className={css.statisticIcon}
            src="/images/wrong-icon.svg"
            width={82}
            height={82}
            alt=""
          />
        </div>
        <div className={css.listHeadersItem}>
          <p>Скорость печати</p>
          <img
            className={css.statisticIcon}
            src="/images/speed-icon.svg"
            width={82}
            height={82}
            alt=""
          />
        </div>
        <div className={css.listHeadersItem}>
          <p>
            Язык<br></br> печати
          </p>
          <img
            className={css.statisticIcon}
            src="/images/languare-icon.svg"
            width={82}
            height={82}
            alt=""
          />
        </div>
        <div className={css.listHeadersItem}>
          <p>Дата прохождения</p>
          <img
            className={css.statisticIcon}
            src="/images/date-icon.svg"
            width={82}
            height={82}
            alt=""
          />
        </div>
      </div>
      {results.length === 0 ? (
        <div className={css.emptyMessageContainer}>
          <p className={css.emptyMessage}>
            Вы пока не завершили ни одного тестирования.
          </p>
        </div>
      ) : (
        results.map((resultItem, index) => {
          return (
            <ResultsItem
              dateString={resultItem.date}
              languare={resultItem.languare}
              speed={resultItem.speed}
              incorrectSymbolsCount={resultItem.incorrectSymbolsCount}
              time={resultItem.seconds}
              accuracy={resultItem.accuracy}
              key={index}
            />
          )
        })
      )}
      {results.length === 0 ? (
        ''
      ) : (
        <button
          onClick={() => dispatch(clearResults())}
          className={css.resetButton}
        >
          Сбросить результаты
        </button>
      )}
    </div>
  )
}
