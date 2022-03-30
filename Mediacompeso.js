//1005
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
var A = parseFloat(lines.shift()).toFixed(1)
var B = parseFloat(lines.shift()).toFixed(1)

var media = (A*3.5 + B*7.5)/11

console.log("MEDIA = "+media.toFixed(5))