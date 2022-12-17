import { GET_CHARACTER,CLOSE_CHARACTER,SEARCH_CHARACTER } from "./actions";

const initialState = {
  characters: [],
  
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_CHARACTER:
      return {
        ...state,
        characters: actions.payload,
      };
    case CLOSE_CHARACTER:
      return{
        ...state,
        characters: state.characters.filter((character) => character.id !== actions.payload) 
      };
    case SEARCH_CHARACTER:
      return{
        ...state,
        characters: state.characters.filter((character) => character.id == actions.payload) 
      }
    default:
      return {
        ...state,
      };
  }
};
export default rootReducer;