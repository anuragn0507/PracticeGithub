import { legacy_createStore as createStore, combineReducers } from "redux";
import userReducer from "../Reducers/userReducer";
import productReducer from "../Reducers/productReducer";

const combineReducer = combineReducers({
    userReducer,
    productReducer,
})

export const store = createStore(
  combineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
