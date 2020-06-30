/*3 Escriba un programa que pida dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales.*/

var numero_1 = prompt('Introduce el primer número');
var numero_2 = prompt('Introduce el segundo número');

var numero1 = parseInt(numero_1);
var numero2 = parseInt(numero_2);

if(numero1<numero2){
    alert(numero1 + ' es menor que '+ numero2);
}else if(numero1>numero2){
    alert(numero1 + ' es mayor que '+ numero2);
}else{
    alert('Los números son iguales');
}

