import { TypingInformation } from '@/entities/instruction'
import css from './Instruction.module.css'

export function Instruction() {
  return (
    <div className={css.root}>
      <TypingInformation />
    </div>
  )
}
