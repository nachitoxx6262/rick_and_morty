import React from "react";
const Form = () => {
  return (
    <>
      <form>
        <label>Nombre:</label>
        <input type="text" name="name" placeholder="Nombre"></input>
        <br />
        <label>Género:</label>
        <input type="text" gender="gender" placeholder="Género"></input>
        <br />
        <label>Especie:</label>
        <input type="text" specie="specie" placeholder="Especie"></input>
        <br />
        <label>Status:</label>
        <input type="text" status="status" placeholder="Status"></input>
      </form>
    </>
  );
};

export default Form;
