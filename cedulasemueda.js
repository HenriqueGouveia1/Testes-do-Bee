var input = require('fs').readFileSync('./stdin', 'utf8');
let valor = parseFloat(input)

const arrNotas = [100, 50, 20, 10, 5, 2]
const arrMuedas= [1.0 , 0.50, 0.25, 0.10, 0.05, 0.01]

console.log("NOTAS:")
for(let nota of arrNotas){
    let qtd = parseInt(valor / nota)
    console.log(qtd +" nota(s) de R$ "+ nota +".00" )
    valor = valor % nota
}
console.log("MOEDAS:")

for(let mueda of arrMuedas){
    let qtd
    if(mueda === 0.01){
        qtd = parseInt(Math.ceil(valor / mueda))
    }else{
        qtd = parseInt((valor / mueda))
    }
    console.log(qtd +" moeda(s) de R$ "+ mueda.toFixed(2))
    valor = valor % mueda
}