import React from "react";
import Style from "./Cards.module.css"
import Card from "../Card/Card";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../Redux/actions";

const Cards = () => {
  const dispatch = useDispatch();

  useEffect(() => {dispatch(getCharacters())},[]);

  const characters = useSelector((state) => state.characters);
  return (
    <div className={Style.card}>
      {characters?.map((character) => (
        <Card
          name={character.name}
          especie={character.species}
          gender={character.gender}
          image={character.image}
          id={character.id}
        />
      ))}
    </div>
  );
};
export default Cards;
