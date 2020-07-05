var miEdad = prompt('Cuantos años tienes?')

var miEdadNumber = parseInt(miEdad)

console.log(typeof miEdad);
console.log(typeof miEdadNumber);

if(miEdadNumber >17){
    alert('Ya puedes manejar')
}else{
    alert('Aun no eres mayor de edad')
}