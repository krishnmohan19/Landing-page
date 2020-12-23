import pollsReducer from "./polls";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  polls: pollsReducer,
});
export default rootReducer;
