function busquedaSecuencial(array, elementToFind){
    //ARRAY
    //ELEMENTO A BUSCAR
    //TAMAÑO DEL ARRAY
    var tamaño = array.length;
    for(var i=0; i<tamaño; i++){
        if(array[i] === elementToFind){
            return i;
        }
    }
    return -1;
}

const miArray = [3,4,7,8,2,10,5,6];

const resp = busquedaSecuencial(miArray,8);
console.log(resp);