import React from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import Style from "./Start.module.css";

const Start = () => {
  return (
    <div className={Style.div}>
      <div className={Style.background}>
        <div className={Style.divboton}>
          <Link to={"/home"}>
            <button className={Style.boton}>Bienvenido</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
