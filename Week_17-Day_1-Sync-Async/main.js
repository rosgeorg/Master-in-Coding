/* 1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje 
como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.
2.- Crear una función que reciba como
    argumento una variable de cualquier tipo y un callback. La función debe retornar como resultado, 
    mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido.
3.- Crear una función que reciba como 
    argumentos dos números y un callback. Según el callback
    que se pase a la función, se devuelve la suma de los
    dos números, la resta de los dos números o la
    multiplicación de los dos números.
4.- Escribe una función que reciba una cadena de
    caracteres y debe devolver, mediante un callback, la
    cadena de caracteres en mayúsculas o en minúsculas.
            ordenSuperior("PejeLagarto", minus);
            -> pejelagarto
            ordenSuperior("PejeLagarto", mayus);
            -> PEJELARTO
5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
    EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
    mayores a dos horas (hacer la comparación en horas) regresar el nuevo array mediante un callback. */

/*Ejercicio 1*/
function ejercicio1(cb) {
  cb();
}

ejercicio1(() => {
  console.log("mensaje");
});

/*Ejercicio 2*/
function ejercicio2(a, cb) {
  cb(a);
}

ejercicio2("hola", (vari) => {
  console.log(typeof vari);
  console.log(vari);
});

/*Ejercicio 3*/
function ejercicio3(a, b, cb) {
  cb(a, b);
}

const suma = (num1, num2) => {
  console.log(num1 + num2);
};

const resta = (num1, num2) => {
  console.log(num1 - num2);
};

const multi = (num1, num2) => {
  console.log(num1 + num2);
};

ejercicio3(7, 7, suma);

ejercicio3(7, 7, resta);

ejercicio3(7, 7, multi);

/*Ejercicio 4*/
function ejercicio4(a, cb) {
  cb(a);
}

const minus = (string) => {
  console.log(string.toLowerCase());
};

const mayus = (string) => {
  console.log(string.toUpperCase());
};

ejercicio4("hola", mayus);
ejercicio4("HOLA", minus);

/*Ejercicio 5*/
let array2 = [];

function ejercicio5(param1, cb) {
  cb(param1);
}

const twoHours = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 120) {
      array2.push(array[i]);
    }
  }
  console.log(array2);
};

ejercicio5([120, 80, 200, 100], twoHours);
