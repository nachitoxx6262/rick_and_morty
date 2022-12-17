import React from "react";
import Cards from "../Cards/Cards";
import { closeCharacter } from "../../Redux/actions";
import { connect, useDispatch, useSelector } from "react-redux";
import Style from "./Card.module.css";
const Card = ({ name, especie, gender, image, id }) => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(closeCharacter(id));
  };
  return (
    <>
      <div className={Style.card}>
        <div className={Style.botonDiv}>
          <button className={Style.boton} onClick={handleClick}>X</button>
        </div>
        <h1>Nombre: {name}</h1>
        <h1>Especie: {especie}</h1>
        <h1>Gender: {gender}</h1>
        <img src={image}></img>
        <h3>{id}</h3>
      </div>
    </>
  );
};
export default Card;
