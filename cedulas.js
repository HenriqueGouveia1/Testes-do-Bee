//1018
var input = require('fs').readFileSync('./stdin', 'utf8');
//var lines = input.split('\n');

const arr = [100, 50, 20, 10, 5, 2 ,1]
let valor = parseInt(input)

for(let nota of arr){
    let qtd = parseInt(valor / nota)
    console.log(`${qtd} nota(s) de R$ ${nota}`)
    valor = valor % nota

}