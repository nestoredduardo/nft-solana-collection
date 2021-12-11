import {
  CHECK_WALLET_CONNECTED,
  CHECK_WALLET_CONNECTED_SUCCESS,
  CHECK_WALLET_CONNECTED_ERROR,
  CONNECT_WALLET,
  CONNECT_WALLET_ERROR,
  CONNECT_WALLET_SUCCESS,
} from './punksType'

const initialState = {
  walletAddress: '',
  connecting: false,
  errorConnecting: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_WALLET_CONNECTED:
      return { ...state, connecting: true }
    case CHECK_WALLET_CONNECTED_SUCCESS:
      return { ...state, connecting: false, walletAddress: action.payload }
    case CHECK_WALLET_CONNECTED_ERROR:
      return { ...state, connecting: false, errorConnecting: true }
    case CONNECT_WALLET:
      return { ...state, connecting: true }
    case CONNECT_WALLET_SUCCESS:
      return { ...state, connecting: false, walletAddress: action.payload }
    case CONNECT_WALLET_ERROR:
      return { ...state, connecting: false, errorConnecting: true }
    default:
      return state
  }
}

export default reducer
