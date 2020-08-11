/* 1.- Hacer una función que reciba una pila como parámetro, y un número, la función debe de sacar el número de elementos que diga el número (segundo parámetro)
Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'], 3)
Salida: ['Manzana','Cebolla','Apio','Naranja'] */

var pila = ['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón']

function popper (list, number){
    if(number <= pila.length){
        for(var i=0; i<number; i++){
            list.pop();
        }
        console.log(list);
    }else{
        console.log("El número no debería exceder el tamaño de la lista");
    }
    
}

popper(pila,7);


/* 2.- Escribir una función reemplazar que tenga como parámetro una pila de elementos de tipo Number y 
dos valores también de tipo Number nuevo y viejo de forma que si el segundo valor aparece en algún lugar 
de la pila,sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,2,7] (editado)  */

var pila2 = [3,2,3,4,6,8,1,2,5,5]

function reemplazar(stack, num1, num2){
    for(var i=(stack.length-1); i>=0; i--){
        if(num2==stack[i]){
            stack[i] = num1;
            delete stack[i];
            console.log(stack);
            break;
        }
        
    }
}

reemplazar(pila2,7,2);