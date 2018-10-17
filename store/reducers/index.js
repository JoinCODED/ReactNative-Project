import { combineReducers } from "redux";

// Reducers
import coffeeReducer from "./coffeeReducer";
import authReducer from "./authReducer";

export default combineReducers({
  coffee: coffeeReducer,
  auth: authReducer
});
