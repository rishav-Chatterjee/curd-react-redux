import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
//import rootSaga from "../sagas/usersSaga";
import rootSaga from "../sagas/rootSaga";
import logger from "redux-logger"; //shows the data flowing through redux in console

/* const initialState = {}; */
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
