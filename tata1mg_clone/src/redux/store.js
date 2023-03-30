import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
 import { reducer as authReducer } from "./Authication/reducer";
 import {reducer as ProductsReducer} from "./Products/reducer"

const rootReducer = combineReducers({
authReducer,
ProductsReducer,
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

