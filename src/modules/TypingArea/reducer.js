import produce from 'immer'
import { SYMBOL_STATUS, DELETE_SYMBOL, TYPE_SYMBOL, RESET_TEXT } from './constants'

export const typingAreaReducer = (state, action) =>
  produce(state, draft => {
    const { payload } = action

    switch (action.type) {
      case TYPE_SYMBOL: {
        const { typedSymbol, tokenIndex, symbolIndex } = payload
        const currentToken = state.tokens[tokenIndex] || {}
        const currentSymbol = currentToken.symbols[symbolIndex] || {}

        const currentStatus = currentSymbol.name === typedSymbol ? SYMBOL_STATUS.OK : SYMBOL_STATUS.ERROR
        const nextSymbolIndex = symbolIndex === currentToken.symbols.length - 1 ? 0 : symbolIndex + 1
        const nextTokenIndex = symbolIndex === currentToken.symbols.length - 1 ? tokenIndex + 1 : tokenIndex

        draft.currentTokenIndex = nextTokenIndex
        draft.currentSymbolIndex = nextSymbolIndex
        draft.tokens[tokenIndex].symbols[symbolIndex].status = currentStatus

        break
      }
      case DELETE_SYMBOL: {
        const { tokenIndex, symbolIndex } = payload

        const prevTokenIndex = symbolIndex === 0 ? tokenIndex - 1 : tokenIndex
        const prevSymbolIndex =
          prevTokenIndex === tokenIndex ? symbolIndex - 1 : state.tokens[prevTokenIndex].symbols.length - 1

        draft.currentTokenIndex = prevTokenIndex
        draft.currentSymbolIndex = prevSymbolIndex
        draft.tokens[prevTokenIndex].symbols[prevSymbolIndex].status = SYMBOL_STATUS.HIDDEN

        break
      }

      case RESET_TEXT: {
        draft.currentTokenIndex = payload.currentTokenIndex
        draft.currentSymbolIndex = payload.currentSymbolIndex
        draft.tokens = payload.tokens

        break
      }
    }
  })
