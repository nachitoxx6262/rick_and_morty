import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchCharacter } from "../../Redux/actions";
const Nav = () => {
  const dispatch = useDispatch();
  const search = (event) => {
    const value = event.target.value;
    dispatch(searchCharacter(value));
  };
  return (
    <>
      <input type="text" id="id" placeholder="ID" onChange={search}></input>
      <Link to="/home">
        <button>HOME</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/form">
        <button>Form</button>
      </Link>
    </>
  );
};

export default Nav;
