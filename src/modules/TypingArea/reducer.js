import { SYMBOL_STATUS, DELETE_SYMBOL, TYPE_SYMBOL, RESET_TEXT } from './constants'

// TODO refactor using immer.js
export const typingAreaReducer = (state, action) => {
  const { payload } = action

  switch (action.type) {
    case TYPE_SYMBOL: {
      const { typedSymbol, tokenIndex, symbolIndex } = payload
      const currentToken = state.tokens[tokenIndex] || {}
      const currentSymbol = currentToken.symbols[symbolIndex] || {}

      const currentStatus = currentSymbol.name === typedSymbol ? SYMBOL_STATUS.OK : SYMBOL_STATUS.ERROR
      const nextSymbolIndex = symbolIndex === currentToken.symbols.length - 1 ? 0 : symbolIndex + 1
      const nextTokenIndex = symbolIndex === currentToken.symbols.length - 1 ? tokenIndex + 1 : tokenIndex

      const newState = {
        ...state,
        currentTokenIndex: nextTokenIndex,
        currentSymbolIndex: nextSymbolIndex,
        tokens: [
          ...state.tokens.slice(0, tokenIndex),
          {
            ...currentToken,
            symbols: [
              ...currentToken.symbols.slice(0, symbolIndex),
              {
                ...currentSymbol,
                status: currentStatus,
              },
              ...currentToken.symbols.slice(symbolIndex + 1),
            ],
          },
          ...state.tokens.slice(tokenIndex + 1),
        ],
      }

      return newState
    }
    case DELETE_SYMBOL: {
      const { tokenIndex, symbolIndex } = payload

      const prevTokenIndex = symbolIndex === 0 ? tokenIndex - 1 : tokenIndex
      const prevSymbolIndex =
        prevTokenIndex === tokenIndex ? symbolIndex - 1 : state.tokens[prevTokenIndex].symbols.length - 1
      const prevToken = state.tokens[prevTokenIndex]
      const prevSymbol = prevToken.symbols[prevSymbolIndex]

      const newState = {
        ...state,
        currentTokenIndex: prevTokenIndex,
        currentSymbolIndex: prevSymbolIndex,
        tokens: [
          ...state.tokens.slice(0, prevTokenIndex),
          {
            ...prevToken,
            symbols: [
              ...prevToken.symbols.slice(0, prevSymbolIndex),
              {
                ...prevSymbol,
                status: SYMBOL_STATUS.HIDDEN,
              },
              ...prevToken.symbols.slice(prevSymbolIndex + 1),
            ],
          },
          ...state.tokens.slice(prevTokenIndex + 1),
        ],
      }

      return newState
    }

    case RESET_TEXT:
      return action.payload

    default:
      return state
  }
}
