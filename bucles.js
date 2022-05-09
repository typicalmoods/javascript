//Bucles/Loops

var amigos = ["Alejandro", "Paula", "Juanito", "Raquel"];

function saludarAmigos(amigo) {
    console.log(`Hola, ${amigo}`);
}
/*    console.log("Hola, " + amigo);
}

//Sin bucle

saludarAmigos(amigos[0]);
saludarAmigos(amigos[1]);
saludarAmigos(amigos[2]);
saludarAmigos(amigos[3]);



//Bucle for

for (var i = 0; i < amigos.length; i++) {
    saludarAmigos(amigos[i]);
}

//Bucle while

var index = 0;
while (index < amigos.length) {
    saludarAmigos(amigos[index]);
    index += 1;
}

//Bucle for con condición

for (var i = 0; i < amigos.length; i++) {
    if (("Alejandro" == amigos[i]) || ("Juanito" == amigos[i])) {
        saludarAmigos(amigos[i]);
    }
}

console.log(saludarAmigos);*/

for (amigo of amigos) {
    saludarAmigos(amigo);
}

console.log(saludarAmigos);