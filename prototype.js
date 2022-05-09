function Animal(nombre, energia) {
    let animal = {};

    animal.nombre = nombre;
    animal.energia = energia;

    animal.come = function (suma) {
        console.log(`${this.nombre} está comiendo`);
        this.energia += suma;
    }

    animal.duerme = function (length) {
        console.log(`${this.nombre} está durmiendo`);
        this.energia += length;
    }

    animal.juega = function (length) {
        console.log(`${this.nombre} está jugando`);
        this.energia -= length;
    }

    return animal;
}

const perro = Animal("Dalma", 8);

perro.duerme(7);
console.log("Energía restante: " + perro.energia);
perro.come(5);
console.log("Energía restante: " + perro.energia);
perro.juega(3);
console.log("Energía restante: " + perro.energia);