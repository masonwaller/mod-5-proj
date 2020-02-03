import isLoggedReducer from "./isLogged";
import locationReducer from './coordinates.js'
import addressReducer from './address.js'
import { combineReducers } from "redux";

const allReducers = combineReducers({
  logged: isLoggedReducer,
  coords: locationReducer,
  address: addressReducer
});

export default allReducers;
