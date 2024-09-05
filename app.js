// PARTE 1: Funciones de Callback y Orden de Ejecución

// Definimos dos variables
let variable1 = "Inicio del proceso";
let variable2 = "Finalizando proceso";

// Mostramos las variables por consola
console.log(variable1); // Se ejecuta de inmediato
console.log(variable2); // Se ejecuta de inmediato

// Función que simula una petición a una base de datos (simulada con setTimeout)
function peticionBaseDatos(callback) {
    console.log("Realizando petición a la base de datos..."); // Se ejecuta inmediatamente antes del callback
    setTimeout(() => {
        // Simulamos un retraso en la respuesta de la base de datos
        let respuesta = { mensaje: "Datos recibidos correctamente" };
        callback(respuesta); // Se ejecuta al terminar la simulación
    }, 2000); // 2 segundos de espera
}

// Función de callback que recibe la respuesta de la base de datos
function mostrarRespuesta(respuesta) {
    console.log(respuesta.mensaje); // Se ejecuta al recibir los datos de la base de datos
}

// Llamamos a la función peticionBaseDatos pasando mostrarRespuesta como callback
peticionBaseDatos(mostrarRespuesta);

// Orden de ejecución esperado:
// 1. Se muestra "Inicio del proceso"
// 2. Se muestra "Finalizando proceso"
// 3. Se muestra "Realizando petición a la base de datos..."
// 4. Después de 2 segundos, se muestra "Datos recibidos correctamente"

// PARTE 2: Modificación de un Array de Objetos en Node.js

// Variable inicial con un array de objetos
let mascotasJson = [
    {
        nombre: "fluffy",
        mascota: "true",
        animal: "gato",
        edadHumana: "7"
    },
    {
        nombre: "Balto",
        mascota: "true",
        animal: "perro",
        edadHumana: "11"
    },
    {
        nombre: "Mandibulas",
        mascota: "false",
        animal: "tiburon",
        edadHumana: "50"
    }
];

// Creamos dos nuevos objetos
let nuevaMascota1 = {
    nombre: "Max",
    mascota: "true",
    animal: "perro",
    edadHumana: "4"
};

let nuevaMascota2 = {
    nombre: "Garfield",
    mascota: "true",
    animal: "gato",
    edadHumana: "8"
};

// Imprimimos la cantidad inicial de objetos
console.log(`Cantidad de objetos inicial: ${mascotasJson.length}`);

// Agregamos los nuevos objetos al array
mascotasJson.push(nuevaMascota1);
mascotasJson.push(nuevaMascota2);

// Imprimimos la cantidad final de objetos
console.log(`Cantidad de objetos final: ${mascotasJson.length}`);

// Imprimimos el array resultante
console.log("Array de objetos modificado:", mascotasJson);

// Orden de ejecución esperado:
// 1. Se imprime la cantidad inicial de objetos.
// 2. Se añaden los nuevos objetos.
// 3. Se imprime la cantidad final de objetos.
// 4. Se imprime el array modificado.
