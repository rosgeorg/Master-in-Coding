/*5. Pedir tres números y obtener el mayor de ellos. (editado) */

var numero_1 = prompt('Introduce el primer número');
var numero_2 = prompt('Introduce el segundo número');
var numero_3 = prompt('Introduce el tercer número');

var numero1 = parseInt(numero_1);
var numero2 = parseInt(numero_2);
var numero3 = parseInt(numero_3);

if(numero1==numero2){
    console.log('Caso1');
    if(numero2==numero3){
        alert('Los tres números son iguales')
    }else if(numero2>numero3){
        alert(numero1+' = '+numero2+' y ambos son mayores que '+numero3)
    }else{
        alert(numero1+' = '+numero2+' y ambos son menores que '+numero3)
    }
}
else if(numero1==numero3){
    console.log('Caso2');
    if(numero1>numero2){
        alert(numero1+' = '+numero3+' y ambos son mayores que '+numero2)
    }else{
        alert(numero1+' = '+numero3+' y ambos son menores que '+numero2)
    }
}
else if(numero2==numero3){
    console.log('Caso3');
    if(numero2>numero1){
        alert(numero2+' = '+numero3+' y ambos son mayores que '+numero1)
    }else{
        alert(numero2+' = '+numero3+' y ambos son menores que '+numero1)
    }
}else if(numero1>numero2 && numero2>numero3){
    alert(numero1 + ' es el número mayor');
}else if(numero1>numero3 && numero3>numero2){
    alert(numero1 + ' es el número mayor');
}else if(numero2>numero1 && numero1>numero3){
    alert(numero2 + ' es el número mayor');
}else if(numero2>numero3 && numero3>numero1){
    alert(numero2 + ' es el número mayor');
}else if(numero3>numero1 && numero1>numero2){
    alert(numero3 + ' es el número mayor');
}else if(numero3>numero2 && numero2>numero1){
    alert(numero3 + ' es el número mayor');
}