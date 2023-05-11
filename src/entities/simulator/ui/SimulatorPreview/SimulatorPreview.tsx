import css from './SimulatorPreview.module.css'
type Props = {
  isReady: boolean
  onReadyButtonClick: CallableFunction
}

export function SimulatorPreview({ isReady, onReadyButtonClick }: Props) {
  return (
    <div className={css.root}>
      {!isReady ? (
        <>
          <p className={css.instructionText}>
            Рекомендуем ознакомится с инструкцией по слепой печати, так вы
            сможете улучшить свои результаты.
          </p>
          <button
            className={css.readyButton}
            onClick={(evt) => {
              onReadyButtonClick(true)
              const parentElement = evt.currentTarget.parentNode
                ?.parentNode as HTMLElement
              if (parentElement && parentElement) {
                parentElement.focus()
              }
            }}
          >
            Начать тестирование
          </button>
        </>
      ) : (
        <>
          <p className={css.instructionText}>
            Расположите руки как на картинке. Когда будете готовы, нажмите
            <span className={css.startButton}> &quot;пробел&quot;</span>, чтобы
            появился текст и начался отсчёт времени.
          </p>
          <img
            className={css.fingerPositionImg}
            src="/images/main_keys.webp"
            alt="Расположение пальцев"
            width={700}
            height={199}
          />
        </>
      )}
    </div>
  )
}
