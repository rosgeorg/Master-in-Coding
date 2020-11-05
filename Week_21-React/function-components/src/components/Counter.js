//Hay que importar/usar useState para poder usar el estado
import React, { useState } from "react";

function Counter() {
  //useState retorna un arreglo de dos elementos
  //A useState le puedes pasar como parámetro el estado inicial
  //Destructurando el objeto:
  //pos 0 ---> el valor del estado (variable contador)
  //pos 1 ---> es su modificador (solo de esa variableen nuestro caso contador)
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>{contador}</p>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Sumar +
      </button>
      <button
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        Resta -
      </button>
    </div>
  );
}

export default Counter;
