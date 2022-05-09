function Receta(nombre, ingredientes, tiempoDeCocinado, precio) {
    let receta = {};

    receta.nombre = nombre;
    receta.ingredientes = ingredientes;
    receta.tiempoDeCocinado = tiempoDeCocinado;
    receta.precio = precio;

    receta.mostrarReceta = function () {
        console.log(`Nombre de la receta: ${this.nombre}`);
        console.log(`Ingredientes de la receta: ${this.ingredientes}`);
        console.log(`Tiempo de cocinado de la receta: ${this.tiempoDeCocinado}`);
        console.log(`Precio de la receta: ${this.precio}`);
    }

    receta.cocinar = function () {
        console.log(`La receta ${this.nombre} se está cocinando`);
    }

    return receta;
}

const ingredientes1 = [
    "gambas", "ajo", "aceite de oliva"
];
const ingredientes2 = [
    "arroz", "pimiento verde", "pimiento rojo", "cebolla", "colorante", "pimentón"
];
const receta1 = Receta("Gambas al ajillo", ingredientes1, 10 + " minutos", 5 + " euros");
const receta2 = Receta("Paella", ingredientes2, 1 + " hora", 7 + " euros");

var recetario = [receta1, receta2];
var index = 1;
recetario.forEach(receta => {
    console.log("***********************");
    console.log("Receta número " + index);
    receta.mostrarReceta();
    index++;
});
