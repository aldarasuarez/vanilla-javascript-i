"use strict";

// alert()

// EJERCICIO PARA LOS ALUMNOS
// EJERCICIO 1
// let nombrePila = "Aldara";
// console.log(nombrePila);


// EJECICIO 2
// nombrePila = "Tixola"; cambiarlle no nombre a variable (sobreescribela)
// console.log(nombrePila);

// EJERCICIO 3
// me dice si comento variable que no está definida

// let operador1=3;
// operador1 = 4;
// let operador2=5;
// let operador3=0;
// // tamén se pode poñer como: let operador 1, let operador 2, let operador 3
// let resultado=0;

// resultado = operador1+operador2;
// resultado = operador1+operador2;

// console.log(operador1+operador2);

// // pasan cosas
// // quiero ver otra vez el resultado
// operador1 = 67;

// console.log(operador1+operador2)

// quiero ver el 8
// console.log(resultado);

// EJERCICIOS PARA RESOLVER CON EL PROFESOR
// EJERCICIO 1
// El área de un círculo es pi multiplicado por el radio al cuadrado (A = π r²)
// a = PI * r * r;

let a = 0, r = 2;
const PI = 3.1416;
a = PI * r * r;
// mostramos por template literals
console.log(`A = π ${r}² = ${a}`);


// EJERCICIO 2
// Algoritmo de un programa que muestre por pantalla el área de un triángulo dada una base y una altura. 
// Nodos
const ej2Profe = document.querySelector(".area-triangulo");
const res2Profe = document.querySelector("#resultado2")

// Funciones

const areaTriangulo = () => {
    // alert()
    // variables
    let aTriangulo = 0;
    let base = 3, altura = 2;
    // Los datos me los da el usuario
    base = prompt("dame la base"); //promp me devuelve un string
    // Number convierte cualquier cosa en número
    base = Number(base);
    altura = prompt("dame la altura");
    altura = Number(altura);

    aTriangulo = base * altura / 2;
    res2Profe.innerHTML = `<code> 
    A(${base}*${altura}/2) = ${aTriangulo}
    </code>`
}


// Eventos
ej2Profe.addEventListener(
    "click",
    areaTriangulo
);


// EJERCICIO 3 DEL PROFE
// nodos

// elementos i del hmtl del tercer ejecicio del profe
const alturaLi = document.querySelector(".persona-altura");
// nodo en el que va la respuesta de este ejercicio
const res3profe = document.querySelector("#resultado3")

//declaración de funciones

const esPersonaAlta = () => {
    let alt = prompt("Dame tu altura en cm")
    console.log(`alt(${alt})es de tipo ${typeof alt}`);
    // Number(alt)
    // quiero convertir el string en numero
    alt = Number(alt)

    console.log(`alt(${alt})es de tipo ${typeof alt}`)

    if (alt > 200) {
        res3profe.innerHTML = `205La persona de ${alt} cm es alta`
    } else {
        res3profe.innerHTML = `La persona de ${alt} cm es bajita`
    }
}

// evento
alturaLi.addEventListener( //siempre lleva mínimo dos parámetros
    "mouseover", //evento al pasar el ratón por encima
    esPersonaAlta
)