/*Crea la suma de todos los números pares del 1 al 3000*/

var suma = 0;

for(var i=1; i<=3000; i++){
    if(i%2 == 0){
        //console.log(i);
        suma = suma + i;
    }
}

console.log(suma);
