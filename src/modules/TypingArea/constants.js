export const SYMBOL_STATUS = {
  HIDDEN: 'HIDDEN',
  ERROR: 'ERROR',
  OK: 'OK',
}
export const initialState = {
  currentTokenIndex: 0,
  currentSymbolIndex: 0,
}

export const DELETE_SYMBOL = 'DELETE_SYMBOL'
export const TYPE_SYMBOL = 'TYPE_SYMBOL'
export const RESET_TEXT = 'RESET_TEXT'

export const actionDeleteSymbol = (tokenIndex, symbolIndex) => ({
  type: DELETE_SYMBOL,
  payload: { tokenIndex, symbolIndex },
})

export const actionTypeSymbol = (tokenIndex, symbolIndex, typedSymbol) => ({
  type: TYPE_SYMBOL,
  payload: { tokenIndex, symbolIndex, typedSymbol },
})

export const actionResetText = tokens => ({
  type: RESET_TEXT,
  payload: { ...initialState, tokens },
})
