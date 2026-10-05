// GYM MANAGER

const gimnasio = "Gym Manager";


// FUNCION 1: Pedir nombre del socio

function pedirSocio(mensaje) {
    let socio = prompt(mensaje);

    return socio;
}


// FUNCION 2: Solicitar la clase

function pedirClase(socio) {

    let opcion = parseInt(prompt(
        "Hola " + socio +
        ". ¿A qué clase querés anotarte? 1. BodyCombat 2. BodyPump 3. Funcional"
    ));

    while (opcion !== 1 && opcion !== 2 && opcion !== 3) {
        opcion = parseInt(
            prompt("Opción incorrecta. Elegí 1, 2 o 3")
        );
    }

    return opcion;
}


// FUNCION 3: Obtener el nombre de la clase

function obtenerClase(opcion) {

    let clase;

    switch (opcion) {
        case 1:
            clase = "BodyCombat";
            break;

        case 2:
            clase = "BodyPump";
            break;

        case 3:
            clase = "Funcional";
            break;
    }

    return clase;
}


// FUNCION 4: Mostrar el resultado
// FUNCION FLECHA

const mostrarResultado = (socio, clase, aptoMedico) => {

    if (aptoMedico === "si") {
        alert(
             socio +
            ", te anotaste correctamente a " + clase
        );
    } else {
        alert(
            "No podés inscribirte. Necesitás el apto médico al día."
        );
    }
};


// PROGRAMA PRINCIPAL

let socio = pedirSocio(
    "¡Bienvenido a " + gimnasio + "! Ingresá tu nombre"
);

let opcion = pedirClase(socio);

let clase = obtenerClase(opcion);

let aptoMedico = prompt(
    "¿Tenés el apto médico al día? si/no"
);

mostrarResultado(socio, clase, aptoMedico);