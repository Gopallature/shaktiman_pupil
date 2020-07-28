import { ADD_CHARACTERS, REMOVE_CHARACTERS } from "../action/index";
import { createCharacter } from "./helper";
function heros(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTERS:
      let heros = [...state, createCharacter(action.id)];
      return heros;

    case REMOVE_CHARACTERS:
      heros = state.filter(item => item.id !== action.id);
      return heros;
    default:
      return state;
  }
}

export default heros;
