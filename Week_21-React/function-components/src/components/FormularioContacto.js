import React from "react";

function FormularioContacto() {
  return (
    <form>
      <input required placeholder="Nombre"></input>
      <input required placeholder="Apellidos"></input>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default FormularioContacto;
