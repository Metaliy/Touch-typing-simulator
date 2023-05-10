type Props = {
  symbol: string
  cssStyle?: CSSModuleClasses
}

export function Symbol({ symbol, cssStyle }: Props) {
  return (
    <span className={cssStyle !== undefined ? '' : cssStyle}>{symbol}</span>
  )
}
