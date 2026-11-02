// GYM MANAGER

const app = "Gym Manager";


// CLASE

class Clase {
    constructor(id, nombre, horario, cupos, profe) {
        this.id = id;
        this.nombre = nombre;
        this.horario = horario;
        this.cupos = cupos;
        this.profe = profe;
    }

    reservarCupo() {
        if (this.cupos > 0) {
            this.cupos--;
            return true;
        } else {
            return false;
        }
    }

    liberarCupo() {
        this.cupos++;
    }
}


// INSTANCIAS

const bodyCombat = new Clase(1, "BodyCombat", "18:00", 20, "Agustina");
const bodyPump = new Clase(2, "BodyPump", "19:00", 15, "Leo");
const funcional = new Clase(3, "Funcional", "20:00", 10, "Paula");
const spinning = new Clase(4, "Spinning", "17:00", 12, "Christian");
const yoga = new Clase(5, "Yoga", "16:00", 18, "Karina");
const personalizada = new Clase(6, "Personalizada", "21:00", 1, "Fabricio");


// ARRAY DE OBJETOS

let clasesDisponibles = [
    bodyCombat,
    bodyPump,
    funcional,
    spinning,
    yoga,
    personalizada
];

let misClases = [];


// ELEGIR UNA CLASE

function elegirClase(mensaje) {
    let opcion = parseInt(prompt(
        mensaje +
        " 1. BodyCombat 2. BodyPump 3. Funcional 4. Spinning 5. Yoga 6. Personalizada"
    ));

    while (
        opcion !== 1 &&
        opcion !== 2 &&
        opcion !== 3 &&
        opcion !== 4 &&
        opcion !== 5 &&
        opcion !== 6
    ) {
        opcion = parseInt(
            prompt("Opción incorrecta. Elegí del 1 al 6")
        );
    }

    return opcion;
}


// FIND: BUSCAR CLASE POR ID

function buscarClase(id) {
    return clasesDisponibles.find(
        clase => clase.id === id
    );
}


// MAP: TRANSFORMAR OBJETOS EN TEXTO

function mostrarClases(lista, titulo) {

    let clasesFormateadas = lista.map(
        clase =>
            "- " +
            clase.nombre +
            " (" +
            clase.horario +
            " - Profe: " +
            clase.profe +
            " - Cupos: " +
            clase.cupos +
            ")"
    );

    let mensaje = titulo + ":\n";

    for (let clase of clasesFormateadas) {
        mensaje = mensaje + clase + "\n";
    }

    alert(mensaje);
    console.log(clasesFormateadas);
}


// PROGRAMA PRINCIPAL

let socio = prompt(
    "¡Bienvenido a " + app + "! Ingresá tu nombre"
);

console.log(
    socio + " ingresó a " + app
);

let opcionMenu = 0;


// MENU PRINCIPAL

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

        // VER CLASES DISPONIBLES
        // FILTER: SOLO MUESTRA LAS QUE TIENEN CUPO

        case 1:

            let clasesConCupo = clasesDisponibles.filter(
                clase => clase.cupos > 0
            );

            mostrarClases(
                clasesConCupo,
                "Clases disponibles"
            );

            console.log(
                "Clases con cupo:",
                clasesConCupo
            );

            break;


        // ANOTARSE A UNA CLASE

        case 2:

            let opcionClase = elegirClase(
                "¿A qué clase querés anotarte?"
            );

            // FIND
            let clase = buscarClase(opcionClase);

            console.log(
                "Clase seleccionada:",
                clase
            );

            let aptoMedico = prompt(
                "¿Tenés el apto médico al día? si/no"
            );

            if (aptoMedico !== "si") {

                alert(
                    "No podés inscribirte. Necesitás el apto médico al día."
                );

            } else if (misClases.includes(clase)) {

                alert(
                    "Ya estás anotado a " +
                    clase.nombre
                );

            } else if (clase.reservarCupo()) {

                misClases.push(clase);

                alert(
                    "Te anotaste correctamente a " +
                    clase.nombre
                );

                console.log(
                    clase.nombre +
                    " - Cupos restantes: " +
                    clase.cupos
                );

            } else {

                alert(
                    "No quedan cupos para " +
                    clase.nombre
                );
            }

            break;


        // VER MIS CLASES

        case 3:

            if (misClases.length === 0) {

                alert(
                    "Todavía no estás anotado a ninguna clase"
                );

            } else {

                mostrarClases(
                    misClases,
                    "Tus clases"
                );
            }

            break;


        // CAMBIAR UNA RESERVA

        case 4:

            if (misClases.length === 0) {

                alert(
                    "No tenés reservas para modificar"
                );

                break;
            }

            mostrarClases(
                misClases,
                "Tus reservas actuales"
            );

            let opcionActual = elegirClase(
                "¿Qué reserva querés cambiar?"
            );

            // FIND
            let claseActual = buscarClase(
                opcionActual
            );

            if (!misClases.includes(claseActual)) {

                alert(
                    "No tenés una reserva de " +
                    claseActual.nombre
                );

                break;
            }

            let opcionNueva = elegirClase(
                "¿Por qué clase querés cambiar " +
                claseActual.nombre +
                "?"
            );

            // FIND
            let claseNueva = buscarClase(
                opcionNueva
            );


            if (claseNueva === claseActual) {

                alert(
                    "Elegí una clase diferente."
                );

            } else if (misClases.includes(claseNueva)) {

                alert(
                    "Ya estás anotado a " +
                    claseNueva.nombre
                );

            } else if (claseNueva.reservarCupo()) {

                let posicion = misClases.indexOf(
                    claseActual
                );

                claseActual.liberarCupo();

                misClases.splice(
                    posicion,
                    1,
                    claseNueva
                );

                alert(
                    "Cambiaste " +
                    claseActual.nombre +
                    " por " +
                    claseNueva.nombre
                );

                console.log(
                    "Nueva reserva:",
                    claseNueva
                );

            } else {

                alert(
                    "No quedan cupos para " +
                    claseNueva.nombre
                );
            }

            break;


        // CANCELAR ULTIMA RESERVA

        case 5:

            if (misClases.length === 0) {

                alert(
                    "No tenés reservas para cancelar"
                );

            } else {

                let claseCancelada = misClases.pop();

                claseCancelada.liberarCupo();

                alert(
                    "Cancelaste tu reserva de " +
                    claseCancelada.nombre
                );

                console.log(
                    "Reserva cancelada:",
                    claseCancelada
                );
            }

            break;


        // SALIR

        case 6:

            alert(
                "¡Hasta pronto, " +
                socio +
                "!"
            );

            console.log(
                socio + " salió de " + app
            );

            break;


        default:

            alert(
                "Opción incorrecta. Elegí del 1 al 6"
            );
    }
}