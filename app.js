let variable1 = "Inicio del proceso";
let variable2 = "Finalizando proceso";

console.log(variable1); 
console.log(variable2); 

function peticionBaseDatos(callback) {
    console.log("Realizando petición a la base de datos..."); 
    setTimeout(() => {
        
        let respuesta = { mensaje: "Datos recibidos correctamente" };
        callback(respuesta); 
    }, 2000); 
}

function mostrarRespuesta(respuesta) {
    console.log(respuesta.mensaje); 
}

peticionBaseDatos(mostrarRespuesta);

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

console.log(`Cantidad de objetos inicial: ${mascotasJson.length}`);

mascotasJson.push(nuevaMascota1);
mascotasJson.push(nuevaMascota2);

console.log(`Cantidad de objetos final: ${mascotasJson.length}`);

console.log("Array de objetos modificado:", mascotasJson);

