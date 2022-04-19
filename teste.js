var input = require('fs').readFileSync('./stdin', 'utf8');
//var lines = input.split('\n');

let qtDias = parseInt(input)
const valores = [365,30,1]
const result = []

for (const valor of valores) {
    result.push(parseInt(qtDias/valor))
    qtDias = qtDias % valor
    if(valor === 365) console.log(result[0]+" ano(s)" )
    if(valor === 30) console.log(result[1]+  " mes(es)")
    if(valor === 1) console.log(result[2]+ " dia(s)")
}

