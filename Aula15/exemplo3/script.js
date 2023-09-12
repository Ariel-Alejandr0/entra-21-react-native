let soma = (numero1, numero2) => {
    if (numero1 === undefined) {
        numero1 = 0;
    } else if (numero2 === undefined){
        numero2 = 0
    }
    return numero1 + numero2;
}

console.log("Sem informar o número 1");
console.log(soma(20))
console.log("Sem informar número 2");
console.log(soma(0,10))
console.log("Sem informar número 2");
console.log(soma(20,10))