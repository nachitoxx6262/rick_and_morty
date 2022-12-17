import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchCharacter, getCharacters, reset } from "../../Redux/actions";
import Style from "./Nav.module.css";
const Nav = () => {
  const dispatch = useDispatch();
  const search = (event) => {
    const value = event.target.value;
    dispatch(searchCharacter(value))
    if(value == ""){
      dispatch(reset())
    }
  };
  return (
    <>
      <div className={Style.div}>
        <div className={Style.logoLink}>
          <Link className={Style.logo} to="/"></Link>
        </div>

        <div className={Style.divboton}>
          <input className={Style.input} type="text" id="id" placeholder="ID" onChange={search}></input>
        </div>
        <div className={Style.divboton}>
          <Link to="/home">
            <button className={Style.boton}>HOME</button>
          </Link>
        </div>

        <div className={Style.divboton}>
          <Link to="/about">
            <button className={Style.boton}>About</button>
          </Link>
        </div>

        <div className={Style.divboton}>
          <Link to="/form">
            <button className={Style.boton}>Form</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
