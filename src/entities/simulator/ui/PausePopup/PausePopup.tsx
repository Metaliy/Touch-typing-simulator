import css from './PausePopup.module.css'

export function PausePopup() {
  return (
    <div className={css.root}>
      <div className={css.pauseInfoContainer}>
        <p className={css.pauseText}>
          Тестирование приостановлено, для продолжения нажмите кнопку ниже
        </p>
        <button className={css.pauseButton}>Продолжить</button>
      </div>
    </div>
  )
}
