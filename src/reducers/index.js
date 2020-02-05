import isLoggedReducer from "./isLogged";
import locationReducer from './coordinates.js'
import addressReducer from './address.js'
import radiusReducer from './radius.js'
import { combineReducers } from "redux";

const allReducers = combineReducers({
  logged: isLoggedReducer,
  coords: locationReducer,
  address: addressReducer,
  radius: radiusReducer
});

export default allReducers;
