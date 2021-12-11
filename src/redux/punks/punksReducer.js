import {
  CHECK_WALLET_CONNECTED,
  CHECK_WALLET_CONNECTED_SUCCESS,
  CHECK_WALLET_CONNECTED_ERROR,
  CONNECT_WALLET,
  CONNECT_WALLET_ERROR,
  CONNECT_WALLET_SUCCESS,
  GET_MINTED_PUNKS,
  GET_MINTED_PUNKS_SUCCESS,
  MINT_PUNK,
  MINT_PUNK_SUCCESS,
  MINT_PUNK_ERROR,
} from './punksType'

const initialState = {
  walletAddress: '',
  connecting: false,
  errorConnecting: false,
  mintedPunks: [],
  loadingPunks: false,
  isminting: false,
  mintMessage: '',
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
    case GET_MINTED_PUNKS:
      return { ...state, loadingPunks: true }
    case GET_MINTED_PUNKS_SUCCESS:
      return { ...state, loadingPunks: false, mintedPunks: action.payload }
    case MINT_PUNK:
      return { ...state, isminting: true }
    case MINT_PUNK_SUCCESS:
      return { ...state, isminting: false, mintMessage: action.payload }
    case MINT_PUNK_ERROR:
      return { ...state, isminting: false, mintMessage: action.payload }
    default:
      return state
  }
}

export default reducer
