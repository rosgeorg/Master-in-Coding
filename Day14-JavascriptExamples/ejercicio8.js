/*Mostrar los números primos entre el 0 y 100.*/

for(var i=0; i<=100; i++){
    if(i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0 && i/i==1 && i!=1){
        console.log(i);
    }
}