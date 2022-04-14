
var input = require('fs').readFileSync('./stdin', 'utf8');
let valor = parseInt(input)

const arr = [100, 50, 20, 10, 5, 2 ,1]

console.log(input)
for(let nota of arr){
    let qtd = parseInt(valor / nota)
    console.log(qtd +" nota(s) de R$ "+ nota +",00" )
    valor = valor % nota
}