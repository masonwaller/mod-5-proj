import isLoggedReducer from "./isLogged";
import locationReducer from './coordinates.js'
import { combineReducers } from "redux";

const allReducers = combineReducers({
  logged: isLoggedReducer,
  coords: locationReducer
});

export default allReducers;
