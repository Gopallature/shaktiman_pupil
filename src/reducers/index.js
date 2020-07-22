import { combineReducers } from "redux";
import characters from "./character_reducer";
import heros from "./heros_reducer";
const rootReducer = combineReducers({
  characters,
  heros
});

export default rootReducer;
