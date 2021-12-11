import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import punksReducer from './punks/punksReducer'

const generateStore = () => {
  const middlewareEnhancer = applyMiddleware(thunk)
  const composeEnhancers = composeWithDevTools(middlewareEnhancer)
  const store = createStore(punksReducer, composeEnhancers)

  return store
}

export default generateStore
