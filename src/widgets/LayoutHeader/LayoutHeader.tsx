import { Link } from 'react-router-dom'
import css from './LayoutHeader.module.css'

export function LayoutHeader() {
  return (
    <header className={css.root}>
      <nav className={css.navigationContainer}>
        <ul className={css.navigation}>
          <li className={css.navigationListElement}>
            <Link className={css.navLink} to={'/education'}>
              Обучение
            </Link>
          </li>
          <li className={css.navigationListElement}>
            <Link className={css.navLink} to={'/'}>
              Тестовое задание
            </Link>
          </li>
          <li className={css.navigationListElement}>
            <Link className={css.navLink} to={'/statistics'}>
              Статистика
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
