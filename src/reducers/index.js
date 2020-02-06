import isLoggedReducer from "./isLogged";
import locationReducer from './coordinates.js'
import addressReducer from './address.js'
import radiusReducer from './radius.js'
import currentReducer from './current.js'
import beachReducer from './clickedBeach.js'
import { combineReducers } from "redux";

const allReducers = combineReducers({
  logged: isLoggedReducer,
  coords: locationReducer,
  address: addressReducer,
  radius: radiusReducer,
  current: currentReducer,
  beach: beachReducer
});

export default allReducers;
