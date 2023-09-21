/*

Ejercicio:
Dada una cadena de texto, comprobar si es un palindromo o no.
No usar funciones de Javascript, solo estructuras de control.

Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("juan") // Devuelve: false

*/

// Con Funciones
function esPalindromoConFunciones(palabra) {
  let invertido = palabra.split("").reverse().join("");
  return invertido === palabra;
}

// Sin Funciones
function esPalindromo(palabra) {
  let letras = [];
  for (let i = 0; i < palabra.length; i++) {
    letras.push(palabra[i]);
  }

  let letrasInvertidas = [];
  for (let i = letras.length - 1; i >= 0; i--) {
    letrasInvertidas.push(letras[i]);
  }

  let palabraInvertida = "";
  for (let i = 0; i < letrasInvertidas.length; i++) {
    palabraInvertida += letrasInvertidas[i];
  }

  return (palabra === palabraInvertida);
}

console.log(esPalindromo("otto")); // Devuelve: true
console.log(esPalindromo("juan")); // Devuelve: false
