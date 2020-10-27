import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import categories from "./categories";
import products from "./products";
import cart from "./cart"
let reducers = combineReducers({ categories,products,cart });
const store = () => createStore(reducers,applyMiddleware(thunk));
export default store();
