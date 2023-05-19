import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import UnderLyingReducer from "./reducers/UnderLyingReducer";
import DerivativeReducer from "./reducers/DerivativeReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    UnderLyingReducer,
    DerivativeReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, promise)));
export default store;
