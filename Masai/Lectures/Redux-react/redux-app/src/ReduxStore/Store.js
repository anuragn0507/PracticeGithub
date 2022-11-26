import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import userReducer from "../Reducers/userReducer";
import logger from 'redux-logger'

export const store = createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

