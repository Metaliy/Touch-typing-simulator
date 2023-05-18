import css from './PausePopup.module.css'

export function PausePopup() {
  return (
    <div className={css.root}>
      <div className={css.pauseInfoContainer}>
        <p className={css.pauseText}>
          Тестирование приостановлено, для продолжения нажмите на это сообщение
          или в любом месте области ввода текста.
        </p>
      </div>
    </div>
  )
}
