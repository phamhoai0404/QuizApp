import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index";

const rootReducer = combineReducers({
  test: require("./Test").reducer,
  alert: require("./Alert").reducer,
  loading: require("./Loading").reducer,
  signin: require("./Signin").reducer,
  user: require("./User").reducer,
  contest: require("./Contest").reducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
