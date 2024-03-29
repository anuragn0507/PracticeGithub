import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import userReducer from "../Reducers/userReducer";
import productReducer from "../Reducers/productReducer";

const combineReducer = combineReducers({
    userReducer,
    productReducer,
})

export const store = createStore(
  combineReducer,
  applyMiddleware(thunk)
);
