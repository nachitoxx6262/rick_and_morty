export const GET_CHARACTER = "GET_CHARACTER";
export const CLOSE_CHARACTER = "CLOSE_CHARACTER";
export const SEARCH_CHARACTER = "SEARCH_CHARACTER";
export const RENDER = "RENDER";

export const getCharacters = () => {
  return (dispatch) => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => (dispatch({type: GET_CHARACTER, payload: data.results})))
      .then((data) => console.log("pedi"))
      .catch((err) => console.log(err));
  };
};
export const closeCharacter = (id) => {
 return {type: CLOSE_CHARACTER, payload:id}
}
export const searchCharacter = (id) => {
  return {type: SEARCH_CHARACTER, payload:id}
 }
 export const reset = () => {
  return {type: RENDER}
 }
 
 