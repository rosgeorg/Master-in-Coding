import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Cards from "./Cards";

function Perdidos() {
  const [empleado, setEmpleado] = useState([]);

  useEffect(() => {
    axios
      .get("http://d98d95a964fc.ngrok.io/employees/")
      .then((result) => {
        console.log(result.data);
        setEmpleado(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (empleado.length === 0) {
    return <h1> Cargando...</h1>;
  } else {
    const listCardEmpleado = empleado.map((empleado) => {
      return (
        <Cards
          idEmpleado={empleado.id}
          nombreEmpleado={empleado.first_name}
          apellidoEmpleado={empleado.last_name}
          emailEmpleado={empleado.email}
          salarioEmpleado={empleado.salary}
          diasEmpleado={empleado.dias}
        />
      );
    });
    return listCardEmpleado;
  }
}

export default Perdidos;
