import React from "react";
import "../Assets/cards.css";

function Cards(props) {
  console.log(props);
  return (
    <div className="card fix">
      <div className="card-body card_font">
        <h5 className="card-title">{props.idEmpleado}</h5>
        <input value={props.nombreEmpleado} placeholder={props.nombreEmpleado}></input>
        <input value={props.apellidoEmpleado} placeholder={props.apellidoEmpleado}></input>
        <p className="card-text ">
          {" "}
          ID: {props.idMascotas}
          <br></br> Especie: {props.especieMascotas} <br></br>{" "}
          {props.razaMascota} <br></br> {props.rasgosMascota}
          <br></br>
          {props.fechaMascota} <br></br>
          {props.zonaMascota}
        </p>
      </div>
    </div>
  );
}

export default Cards;
