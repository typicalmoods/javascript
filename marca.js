function Coche(nombre, color, piezas, tiempoDeFabricacion, precio, pais, ) {
    let coche = {};

    coche.nombre = nombre;
    coche.color = color;
    coche.piezas = piezas;
    coche.tiempoDeFabricacion = tiempoDeFabricacion;
    coche.precio = precio;
    coche.pais = pais;

    coche.mostrarCoche = function () {
        console.log(`Nombre del coche: ${this.nombre}`);
        console.log(`Color del vehículo: ${this.color}`);
        console.log(`Piezas del coche: ${this.piezas}`);
        console.log(`Tiempo de fabricación: ${this.tiempoDeFabricacion}`);
        console.log(`Precio del coche: ${this.precio}`);
        console.log(`País de fabricación: ${this.pais}`);
    }

    coche.fabricar = function () {
        console.log(`El coche ${this.nombre} se está fabricando`);
    }

    return coche;
}
const nombreToyota = "Toyota Corolla";
const colorToyota = "negro";
const piezasToyota = [
    "puertas", "motor", "ruedas"
];
const tiempoToyota = "3 meses";
const precioToyota = 15000;
const paisToyota = "Japón";

var toyota = Coche(nombreToyota, colorToyota, piezasToyota, tiempoToyota, precioToyota, paisToyota);

toyota.mostrarCoche();