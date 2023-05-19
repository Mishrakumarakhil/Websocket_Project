import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import UnderLyingReducer from "./reducers/UnderLyingReducer";
import promise from "redux-promise-middleware";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    UnderLyingReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, promise)));
export default store;
