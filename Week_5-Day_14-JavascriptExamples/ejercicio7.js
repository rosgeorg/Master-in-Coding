/*Contar los multiplos de 3 desde la unidad hasta un num que ingrese el usuario.*/

var num = prompt('Ingresa un número');


for(var i=1; i<=num; i++){
    if(i%3 == 0){
        console.log(i);
    }
}
