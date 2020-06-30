/*2. Escriba un programa que pida dos números enteros y que calcule su división, escribiendo si la división es exacta o no.*/

var numero_1 = prompt('Introduce el primer número');
var numero_2 = prompt('Introduce el segundo número');

var numero1 = parseInt(numero_1);
var numero2 = parseInt(numero_2);


var division = (numero1%numero2);

if(division==0){
    alert('Exacta')
}else if(division!=0){
    alert('Inexacta')
}

