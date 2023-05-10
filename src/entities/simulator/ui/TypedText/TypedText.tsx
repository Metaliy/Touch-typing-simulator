type Props = {
  typedText: string[]
  getClass: CallableFunction
  correctSymbolCount: number
  wrongSymbolIndex: number
}

export function TypedText({
  typedText,
  getClass,
  correctSymbolCount,
  wrongSymbolIndex,
}: Props) {
  return (
    <>
      {typedText.map((symbol, index) => {
        return (
          <span
            className={getClass(index, correctSymbolCount, wrongSymbolIndex)}
            key={index}
          >
            {symbol}
          </span>
        )
      })}
    </>
  )
}
