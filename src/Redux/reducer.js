import { GET_CHARACTER,CLOSE_CHARACTER,SEARCH_CHARACTER,RENDER,CREATE_CHARACTER } from "./actions";

const initialState = {
  characters: [],
  characterFilter:[]
  
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_CHARACTER:
      return {
        ...state,
        characters: actions.payload,
        characterFilter:actions.payload,
      };
    case CLOSE_CHARACTER:
      return{
        ...state,
        characters: state.characters.filter((character) => character.id !== actions.payload),
        characterFilter: state.characters
      };
    case SEARCH_CHARACTER:
      return{
        ...state,
        characterFilter: state.characters.filter((character) => character.id == actions.payload) 
      }
    case RENDER:
      return{
      ...state,
      characterFilter: state.characters}
    case CREATE_CHARACTER:
      return{
        ...state,
        characterFilter: [...state.characterFilter,actions.payload]
      }
    default:
      return {
        ...state,
      };
  }
};
export default rootReducer;