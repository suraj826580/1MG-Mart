import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
 import { reducer as authReducer } from "./Authication/reducer";
 import {reducer as ProductsReducer} from "./Products/reducer"
import {reducer as CartReducer} from "./CartReducer/reducer"
const rootReducer = combineReducers({
authReducer,
ProductsReducer,
CartReducer,

});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

