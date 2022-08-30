import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { listEduReducer } from "./reducers/educationReducer/educationReducer";
import {
  listPopReducer,
  sumPopReducer,
  listPopMiddleReducer,
  listPopAgeReducer,
  listPopTotalReducer,
  listPopTotalAgeReducer,
} from "./reducers/populationsReducer/populationsRed";
const middleware = [thunk];
const finalReducer = combineReducers({
  listEduReducer: listEduReducer,
  listPopReducer: listPopReducer,
  sumPopReducer: sumPopReducer,
  listPopMiddleReducer: listPopMiddleReducer,
  listPopAgeReducer: listPopAgeReducer,
  listPopTotalReducer: listPopTotalReducer,
  listPopTotalAgeReducer: listPopTotalAgeReducer,
});

const initialState = {};
const store = createStore(
  finalReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
