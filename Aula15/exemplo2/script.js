let variavelA = 50;

const numero = function() {
    variavelA = 0;
    console.log("Dentro da function " + variavelA);
}

console.log("Fora da function " + variavelA)
numero()