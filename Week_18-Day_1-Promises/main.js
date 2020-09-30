//Las promesas son para operaciones asíncronas

function miPrimeraPromesaEsMayorQueUno(num) {
  //Recibe como parámetro un callback
  //El callback recibe como parámetro "resolve" & "reject"
  // - resolve ---> Se cumple el objetivo de la promesa
  // - reject ---> No se cumple el objetivo de la promesa

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 1) {
        resolve("String del resolve");
      } else {
        reject("No es mayor que 1");
      }
    }, 2000);
  });
}

miPrimeraPromesaEsMayorQueUno(40)
  .then((palabra) => {
    console.log("THEN: " + palabra);
  })
  .catch((error) => {
    console.log("CATCH: " + error);
  });
