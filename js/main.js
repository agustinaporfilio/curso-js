const gimnasio = "Gym Manager";

let socio = prompt("¡Bienvenido! Ingresá tu nombre");

let opcion = prompt("¿A qué clase querés anotarte? 1. BodyCombat 2. BodyPump 3. Funcional");

// Repetir si la opción es incorrecta

while (opcion !== "1" && opcion !== "2" && opcion !== "3") {
    opcion = prompt("Opción incorrecta. Elegí 1, 2 o 3");
}

// Asignar la clase elegida

let clase;

switch (opcion) {
    case "1":
        clase = "BodyCombat";
        break;

    case "2":
        clase = "BodyPump";
        break;

    case "3":
        clase = "Funcional";
        break;
}

// Verificar apto médico

let aptoMedico = prompt("¿Tenés el apto médico al día? si/no");

if (aptoMedico === "si") {
    alert("Hola " + socio + ", te anotaste correctamente a " + clase);
} else {
    alert("No podés inscribirte a la clase");
}