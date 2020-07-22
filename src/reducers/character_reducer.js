import characters_json from "../data/chracters.json";
import { ADD_CHARACTERS } from "../action/index";

function characters(state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARACTERS:
      let characters = state.filter(item => item.id !== action.id);
      return characters;

    default:
      return state;
  }
}

export default characters;
