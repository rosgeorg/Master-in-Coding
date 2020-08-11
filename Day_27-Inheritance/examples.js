/* 1. Hacer superclase Maestro y subclases Maestro de Física y
Maestro de Música y a cada uno asignarle su materia y
calcular su promedio de grupo a partir de calificaciones
(puedes usar arreglos). El maestro de física tiene un
atributo "antiguedad" que guarda un valor numerico,
mientras que el maestro de música tiene un atributo "edad"
también guardando un valor numérico. */
class Maestro {
    constructor(materia, calificaciones) {
        this.materia = materia;
        this.calificaciones = calificaciones;
    }

    promedio() {
        let suma = 0;
        let i = 0;
        for (i = 0; i < this.calificaciones.length; i++) {
            suma = suma + this.calificaciones[i];
        }

        return (suma / this.calificaciones.length)
    }

}

class MaestroDeFisica extends Maestro {
    constructor(materia, calificaciones, antigüedad) {
        super(materia, calificaciones);
        this.antigüedad = antigüedad;
    }
}

class MaestroDeMusica extends Maestro {
    constructor(materia, calificaciones, edad) {
        super(materia, calificaciones);
        this.edad = edad;
    }
}

const profeFisica = new MaestroDeFisica('Fisica', [10, 9, 7, 6, 9, 6, 8, 10], 5);
const profeMusica = new MaestroDeMusica('Música', [9, 8, 6, 7, 6, 9, 8, 10, 9], 27);

console.log(profeFisica.promedio());
console.log(profeMusica.promedio());

/* 2.- Crea una superclase llamada Electrodoméstico con las 
siguientes características:
a. Sus atributos son precio, color, consumoEnergetico
y capacidad (peso máximo)
b. El constructor solo debe pedir precio, color 
y capacidad. 
c. consumoEnergetico debe iniciar con valor de 100 */

class Electrodoméstico {
    constructor(precio, color, capacidadKg) {
        this.precio = precio;
        this.color = color;
        this.capacidadKg = capacidadKg;
        this.consumoEnergético = 100;
    }

    setConsumo(cons) {
        this.consumoEnergético = cons;
    }

}

/* 3.- Crea una subclase de Electrodomestico llamada Lavadora 
con las siguientes características:
a. Su atributo es carga(kg de ropa), además de los 
atributos heredados.
b. Crea el método precioFinal(). Este se calcula
multiplicando el consumoEnergetico por la carga. */

class Lavadora extends Electrodoméstico {
    constructor(cargaKg, precio, color, capacidadKg) {
        super(precio, color, capacidadKg);
        this.cargaKg = cargaKg;
    }


    precioFinal() {
        return (this.consumoEnergético * this.cargaKg);
    }
}


const mabe = new Lavadora(7, '$4000.00', 'blanca', '15');
console.log(mabe);

console.log(mabe.precioFinal());

/* 4.- Crear la clase construcción que hereda a otras dos 
clases "casa" y "edificio". 
a. Sus atributos son: numPuertas, numVentanas, numPisos,
direccion, altura, largo y ancho del terreno.
b. Cada uno tiene un metodo que regresa los metros 
cuadrados
c. Un metodo debe regresar la direccion
d. Un metodo debe permitir modificar la direccion
e. Buscar la mejor manera de aprovechar la herencia */

class Construccion {
    constructor(puertas, ventanas, pisos, direccion, altura, largo, ancho) {
        this.numPuertas = puertas;
        this.numVentanas = ventanas;
        this.numPisos = pisos;
        this.direccion = direccion;
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
    }

    superficie() {
        return (this.ancho * this.largo);
    }

    adress() {
        return this.direccion;
    }

    modAdress(newAdress) {
        this.direccion = newAdress;
    }

}

class Casa extends Construccion {
    constructor(puertas, ventanas, pisos, direccion, altura, largo, ancho) {
        super(puertas, ventanas, pisos, direccion, altura, largo, ancho);
    }
}

class Edificio extends Construccion {
    constructor(puertas, ventanas, pisos, direccion, altura, largo, ancho) {
        super(puertas, ventanas, pisos, direccion, altura, largo, ancho);
    }
}

const casaChica = new Casa(3, 3, 1, 'Juan Kepler #128', '3m', 10, 20)
console.log(casaChica.adress());

casaChica.modAdress('Carnero #452');
console.log(casaChica.adress());

/* 5.- Crear una clase Bebida que herede a dos clases Cerveza
y Refresco. Ambas clases deben tener la propiedad
cantidad (ml). La clase Refresco debe tener el atributo
azucar(g) y la clase Cerveza debe el atributo
porcentajeAlcohol. Crear los getters y setters
correspondientes. */

class Bebida{
    constructor(cantidadml){
        this.cantidad = cantidadml;
    }

    getCantidad(){
        return this.cantidad;
    }
    setCantidad(cantidad){
        this.cantidad = cantidad;
    }

}

class Cerveza extends Bebida{
    constructor(alcoholPorcent, cantidadml){
        super(cantidadml);     
        this.porcentajeAlcohol = alcoholPorcent;
    }

    getPorcentajeDeAlcohol(){
        return this.porcentajeAlcohol;
    }
    setPorcentajeDeAlcohol(porcentaje){
        this.porcentajeAlcohol = porcentaje;
    }

}

class Refresco extends Bebida{
    constructor(azucarg, cantidadml){
        super(cantidadml);     
        this.azucarg = azucarg;
    }

    getAzucar(){
        return this.azucarg;
    }
    setAzucar(azucar){
        this.azucarg = azucar;
    }

}

const Tecate = new Cerveza('4.5%','335ml');
console.log(Tecate);

const CocaCola = new Refresco('200kcal', '600ml');
console.log(CocaCola.getAzucar());
console.log(CocaCola.azucarg);
console.log(CocaCola);
