import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import app from '../reducers'

export default function appStore() {
  let store = createStore(
    app, 
    composeWithDevTools(
      applyMiddleware(thunk)
    ))
  return store
}