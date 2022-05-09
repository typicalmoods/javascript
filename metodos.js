//Métodos

var ejemplo1 = "Hola, Mundo"

console.log(ejemplo1.toUpperCase());

console.log(ejemplo1.toLowerCase());

var secuencia = [1, 2, 3];
console.log(secuencia);
secuencia.push(4);
console.log(secuencia);
var secuenciaAEliminar = [2, 3];
var secuenciaFiltrada = secuencia
                        .filter(valorDeSecuencia => !secuenciaAEliminar.includes(valorDeSecuencia));


console.log(secuenciaFiltrada);

var frutas = ["mango", "fresa", "plátano", "naranja"];

var nuevaLongitud = frutas.unshift("Mandarina");
console.log(frutas);
console.log(frutas[0]);
var borrarFruta = frutas.shift("Mandarina");
console.log(frutas);
console.log(frutas[0]);