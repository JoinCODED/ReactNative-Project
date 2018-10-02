import { combineReducers } from "redux";

// Reducers
import coffeeReducer from "./coffeeReducer";

export default combineReducers({
  coffee: coffeeReducer
});
