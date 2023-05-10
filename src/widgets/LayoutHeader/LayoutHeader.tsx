import { type ReactNode } from 'react'
import css from './LayoutHeader.module.css'

type Props = {
  logotypeSlot: ReactNode
  rightContentSlot: ReactNode
}

export function LayoutHeader(props: Props) {
  return (
    <header className={css.root}>
      <nav className={css.navigationContainer}>
        <ul className={css.navigation}>
          <li className={css.navigationListElement}>Обучение</li>
          <li className={css.navigationListElement}>Тестовое задание</li>
          <li className={css.navigationListElement}>Статистика</li>
        </ul>
      </nav>
    </header>
  )
}
