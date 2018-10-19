import { combineReducers } from "redux";

import ownerNameReducer from "./owner";

const appReducer = combineReducers({
  ownerNameReducer
});

export default appReducer;
