export const ADD_CHARACTERS = "ADD_CHARACTERS";

export function addCharacterById(id) {
  const action = {
    type: ADD_CHARACTERS,
    id
  };
  return action;
}
