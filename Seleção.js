// 1035
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split(' ').map(x => Number(x));

var [A,B,C,D] = lines;
if (B > C && D > A && C+D > (A+B) && (C&&D >0) && (A%2===0)){
    console.log("Valores aceitos");
}else{
    console.log("Valores nao aceitos");
}



