/*4 Escriba un programa que pida el año actual y un año cualquiera y que escriba cuántos años han pasado desde ese año o cuántos años faltan*/

var anio_actual = prompt('Introduce el año actual');
var anio_2 = prompt('Introduce un año cualquiera');

var anioActual = parseInt(anio_actual);
var anio2 = parseInt(anio_2);

if(anioActual<anio2){
    var dif = anio2-anioActual;
    alert('Faltan '+dif+' años para llegar al '+anio2);
}else if(anioActual>anio2){
    var dif = anioActual-anio2;
    alert('Han pasado '+dif+' años desde el '+anio2);
}else{
    alert('Introduce un año diferente al actual');
}
