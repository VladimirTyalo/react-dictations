export const SYMBOL_STATUS = {
  HIDDEN: 'HIDDEN',
  ERROR: 'ERROR',
  OK: 'OK',
}
export const initialState = {
  currentTokenIndex: 0,
  currentSymbolIndex: 0,
  tokens: [...Array(20)].map(t => ({
    id: Math.random() * 1000,
    symbols: [...Array(5)]
      .map(s => ({
        id: Math.random() * 1000,
        name: String.fromCharCode((97 + Math.random() * 26) | 0),
        status: SYMBOL_STATUS.HIDDEN,
      }))
      .concat([
        {
          id: 'empty',
          name: ' ',
        },
      ]),
  })),
}

export const DELETE_SYMBOL = 'DELETE_SYMBOL'
export const TYPE_SYMBOL = 'TYPE_SYMBOL'

export const actionDeleteSymbol = (tokenIndex, symbolIndex) => ({
  type: DELETE_SYMBOL,
  payload: { tokenIndex, symbolIndex },
})

export const actionTypeSymbol = (tokenIndex, symbolIndex, typedSymbol) => ({
  type: TYPE_SYMBOL,
  payload: { tokenIndex, symbolIndex, typedSymbol },
})
