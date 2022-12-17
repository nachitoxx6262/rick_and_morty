import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { getCharacters } from "../../Redux/actions";
import Style from "./Start.module.css";

const Start = () => {
  const dispatch = useDispatch();

  useEffect(() => {dispatch(getCharacters())},[]);
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
