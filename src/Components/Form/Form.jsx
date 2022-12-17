import React from "react";
import Style from "./Form.module.css";
import { useState } from "react";
import { createCharacter } from "../../Redux/actions";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    gender: "",
    species: "",
  });
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createCharacter({
        ...form,
        id: Date.now(),
        image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
      }),
      alert("personaje creado")
    );
  };
  return (
    <div className={Style.todo}>
      <form onSubmit={handleSubmit} className={Style.form}>
        <div className={Style.a}>
          <label>Nombre: </label>
          <input
          className={Style.boton}
            onChange={handleChange}
            value={form.name}
            type="text"
            name="name"
            placeholder="Nombre"
          ></input>
        </div>
        <div className={Style.a}>
          <label>Especie: </label>
          <input
          className={Style.boton}
            onChange={handleChange}
            value={form.species}
            type="text"
            name="species"
            placeholder="Especie"
          ></input>
        </div>
        <div className={Style.a}>
          <label>Género: </label>
          <input
          className={Style.boton}
            onChange={handleChange}
            value={form.gender}
            type="text"
            name="gender"
            placeholder="Género"
          ></input>
        </div>
        <button className={Style.boton}type="submit">ACEPTAR</button>
      </form>
    </div>
  );
};

export default Form;
