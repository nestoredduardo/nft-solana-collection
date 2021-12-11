import {
  CHECK_WALLET_CONNECTED,
  CHECK_WALLET_CONNECTED_SUCCESS,
  CHECK_WALLET_CONNECTED_ERROR,
  CONNECT_WALLET,
  CONNECT_WALLET_ERROR,
  CONNECT_WALLET_SUCCESS,
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

export { checkIfWalletIsConnected, connectWallet }
