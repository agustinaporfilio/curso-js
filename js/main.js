// GYM MANAGER

const app = "Gym Manager";

let clasesDisponibles = [
    "BodyCombat",
    "BodyPump",
    "Funcional",
    "Spinning",
    "Yoga"
];

let misClases = [];


// OBTENER NOMBRE DE LA CLASE

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
        case 4:
            clase = "Spinning";
            break;
        case 5:
            clase = "Yoga";
            break;
    }

    return clase;
}


// MOSTRAR CLASES

function mostrarClases(lista, titulo) {
    let mensaje = titulo + ": ";
    let primeraClase = true;

    for (let clase of lista) {
        if (primeraClase === false) {
            mensaje = mensaje + " - ";
        }

        mensaje = mensaje + clase;
        primeraClase = false;
    }

    alert(mensaje);
    console.log(mensaje);
}


// PROGRAMA PRINCIPAL

let socio = prompt("¡Bienvenido a " + app + "! Ingresá tu nombre");

console.log(socio + " ingresó a " + app);

let opcionMenu = 0;

while (opcionMenu !== 6) {

    opcionMenu = parseInt(prompt(
        "¿Qué querés hacer? " +
        "1. Ver clases disponibles " +
        "2. Anotarme a una clase " +
        "3. Ver mis clases " +
        "4. Cambiar una reserva " +
        "5. Cancelar mi última reserva " +
        "6. Salir"
    ));

    switch (opcionMenu) {

        case 1:
            mostrarClases(clasesDisponibles, "Clases disponibles");
            break;


        case 2:
            let opcionClase = parseInt(prompt(
                "¿A qué clase querés anotarte? " +
                "1. BodyCombat 2. BodyPump 3. Funcional 4. Spinning 5. Yoga"
            ));

            while (
                opcionClase !== 1 &&
                opcionClase !== 2 &&
                opcionClase !== 3 &&
                opcionClase !== 4 &&
                opcionClase !== 5
            ) {
                opcionClase = parseInt(prompt("Opción incorrecta. Elegí del 1 al 5"));
            }

            let clase = obtenerClase(opcionClase);
            let aptoMedico = prompt("¿Tenés el apto médico al día? si/no");

            if (aptoMedico !== "si") {
                alert("No podés inscribirte. Necesitás el apto médico al día.");
            } else if (misClases.includes(clase)) {
                alert("Ya estás anotado a " + clase);
            } else {
                misClases.push(clase);
                alert("Te anotaste correctamente a " + clase);
                console.log(socio + " se anotó a " + clase);
            }

            break;


        case 3:
            if (misClases.length === 0) {
                alert("Todavía no estás anotado a ninguna clase");
            } else {
                mostrarClases(misClases, "Tus clases");
            }

            break;


        case 4:
            if (misClases.length === 0) {
                alert("No tenés reservas para modificar");
                break;
            }

            mostrarClases(misClases, "Tus reservas actuales");

            let opcionActual = parseInt(prompt(
                "¿Qué reserva querés cambiar? " +
                "1. BodyCombat 2. BodyPump 3. Funcional 4. Spinning 5. Yoga"
            ));

            let claseActual = obtenerClase(opcionActual);

            if (!misClases.includes(claseActual)) {
                alert("No tenés una reserva de " + claseActual);
                break;
            }

            let opcionNueva = parseInt(prompt(
                "¿Por qué clase querés cambiar " + claseActual + "? " +
                "1. BodyCombat 2. BodyPump 3. Funcional 4. Spinning 5. Yoga"
            ));

            let claseNueva = obtenerClase(opcionNueva);

            if (claseNueva === claseActual) {
                alert("Elegí una clase diferente.");
            } else if (misClases.includes(claseNueva)) {
                alert("Ya estás anotado a " + claseNueva);
            } else {
                let posicion = misClases.indexOf(claseActual);

                misClases.splice(posicion, 1, claseNueva);

                alert("Cambiaste " + claseActual + " por " + claseNueva);
                console.log(socio + " cambió " + claseActual + " por " + claseNueva);
            }

            break;


        case 5:
            if (misClases.length === 0) {
                alert("No tenés reservas para cancelar");
            } else {
                let claseCancelada = misClases.pop();

                alert("Cancelaste tu reserva de " + claseCancelada);
                console.log("Se ha eliminado el elemento: " + claseCancelada);
            }

            break;


        case 6:
            alert("¡Hasta pronto, " + socio + "!");
            console.log(socio + " salió de " + app);
            break;


        default:
            alert("Opción incorrecta. Elegí del 1 al 6");
    }
}