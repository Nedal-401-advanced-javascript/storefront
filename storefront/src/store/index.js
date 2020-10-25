import { createStore, combineReducers } from "redux";
import products from "./products";
import categories from "./categories";
let reducers = combineReducers({ products, categories });
const store = () => createStore(reducers);
export default store();
