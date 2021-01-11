import {createStore, compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './Reducer/RootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

 const REDUX_DEV_TOOLS = window._REDUX_DEVTOOLS_EXTENSION_ && composeWithDevTools()
 const composeEnhancers = [applyMiddleware(thunk),REDUX_DEV_TOOLS]

const Store = createStore(RootReducer,compose(...composeEnhancers))

export default Store