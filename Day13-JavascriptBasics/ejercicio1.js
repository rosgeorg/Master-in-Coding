/*1 Escribe un programa que responda a un usuario que quiere comprar un helado más toppings.
Precio base del helado: 35
El topping de oreo cuesta 12.
El topping de KitKat cuesta 17
El topping de brownie cuesta 13.
   prompt("qué topping quieres");
2. Escriba un programa que pida dos números enteros y que calcule su división, escribiendo si la división es exacta o no.
3 Escriba un programa que pida dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales.
4 Escriba un programa que pida el año actual y un año cualquiera y que escriba cuántos años han pasado desde ese año o cuántos años faltan
5. Pedir tres números y obtener el mayor de ellos. (editado) */

var topping = prompt('¿Qué topping deseas?')

var helado = 35

if(topping==='oreo'){
   var total = helado + 12;
   alert('Total a pagar: ' + total)
}else if(topping==='KitKat'){
   var total = helado + 17;
   alert('Total a pagar: ' + total)
}else if(topping==='brownie'){
   var total = helado + 13;
   alert('Total a pagar: ' + total)
}else{
   alert('El topping no existe')
}