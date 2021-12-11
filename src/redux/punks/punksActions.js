import {
  CHECK_WALLET_CONNECTED,
  CHECK_WALLET_CONNECTED_SUCCESS,
  CHECK_WALLET_CONNECTED_ERROR,
  CONNECT_WALLET,
  CONNECT_WALLET_ERROR,
  CONNECT_WALLET_SUCCESS,
  MINT_PUNK,
  MINT_PUNK_SUCCESS,
  MINT_PUNK_ERROR,
  GET_MINTED_PUNKS,
  GET_MINTED_PUNKS_SUCCESS,
} from './punksType'

const checkIfWalletIsConnected = () => async (dispatch) => {
  dispatch({
    type: CHECK_WALLET_CONNECTED,
  })
  try {
    const { solana } = window
    if (solana && solana.isPhantom) {
      console.log('Phantom wallet found!')

      const response = await solana.connect({ onlyIfTrusted: true })
      const publicKey = response.publicKey.toString()
      console.log('Connected with Public Key:', publicKey)

      dispatch({
        type: CHECK_WALLET_CONNECTED_SUCCESS,
        payload: publicKey,
      })
    } else {
      alert('Solana object not found!! Get a Phantom Wallet 👻')
      dispatch({
        type: CHECK_WALLET_CONNECTED_ERROR,
      })
    }
  } catch (error) {
    console.log(error)
  }
}

const connectWallet = () => async (dispatch) => {
  dispatch({
    type: CONNECT_WALLET,
  })
  try {
    const { solana } = window

    if (solana) {
      const response = await solana.connect()
      console.log('Connected with Public Key:', response.publicKey.toString())
      const publicKey = response.publicKey.toString()

      dispatch({
        type: CONNECT_WALLET_SUCCESS,
        payload: publicKey,
      })
    }
  } catch (error) {
    dispatch({
      type: CONNECT_WALLET_ERROR,
    })
  }
}

const getMintedPunks = () => (dispatch) => {
  dispatch({
    type: GET_MINTED_PUNKS,
  })
}

const successMintedPunks = (punks) => (dispatch) => {
  console.log(punks)
  dispatch({
    type: GET_MINTED_PUNKS_SUCCESS,
    payload: punks,
  })
}

const setIsMinting = () => (dispatch) => {
  dispatch({
    type: MINT_PUNK,
  })
}

const errorMinting = (message) => (dispatch) => {
  dispatch({
    type: MINT_PUNK_ERROR,
    payload: message,
  })
}

const successMinting = (message) => (dispatch) => {
  dispatch({
    type: MINT_PUNK_SUCCESS,
    payload: message,
  })
}

export {
  checkIfWalletIsConnected,
  connectWallet,
  getMintedPunks,
  setIsMinting,
  errorMinting,
  successMinting,
  successMintedPunks,
}
