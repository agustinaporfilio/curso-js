# Gym Manager

Gym Manager es un simulador de gestión de clases de gimnasio desarrollado en JavaScript.

El proyecto permite consultar clases disponibles, realizar reservas, modificar una reserva y cancelar una clase. También administra los cupos disponibles de cada actividad.

## Funcionalidades

El simulador permite:

- Ver las clases disponibles.
- Anotarse a una clase.
- Ver las clases reservadas.
- Cambiar una reserva.
- Cancelar la última reserva.
- Consultar los cupos disponibles de cada clase.

## Clases disponibles

Actualmente el sistema incluye:

- BodyCombat
- BodyPump
- Funcional
- Spinning
- Yoga
- Personalizada

Cada clase contiene información sobre su nombre, horario, profesor y cantidad de cupos disponibles.

## Tecnologías utilizadas

- HTML
- JavaScript

## Conceptos utilizados

Durante el desarrollo se aplicaron distintos conceptos de JavaScript, entre ellos:

- Variables y constantes.
- Condicionales.
- `switch`.
- Ciclos `while` y `for...of`.
- Funciones.
- Arrays.
- Clases y objetos.
- Métodos de arrays.
- Funciones de orden superior.

También se utilizaron los métodos:

- `find()` para buscar clases por id.
- `filter()` para mostrar únicamente las clases con cupos disponibles.
- `map()` para transformar la información de las clases y mostrarla de forma más clara.

## Estructura del proyecto

```text
curso-javascript/
│
├── index.html
├── README.md
│
└── js/
    └── main.js
```

## Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir el archivo `index.html` en el navegador.
4. También se puede ejecutar utilizando Live Server.
5. Seguir las opciones que aparecen mediante `prompt` y `alert`.
6. Abrir la consola del navegador para visualizar información adicional mediante `console.log`.