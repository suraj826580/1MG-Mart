import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const root = combineReducers({});
const store = legacy_createStore(root, applyMiddleware(thunk));
