var input = require('fs').readFileSync('./stdin', 'utf8');
//var lines = input.split('\n');

let qtdS = parseInt(input)
const valores = [3600, 60, 1]
const result = []

for(let valor of valores){
    result.push(parseInt(qtdS/valor))
    qtdS = qtdS % valor
}

console.log(result.join(":"))