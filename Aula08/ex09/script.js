let numMaior = 0
let numDigitado = 0


while(numDigitado != -1){
    numDigitado = parseInt(prompt("Digite um número Inteiro [-1 para o programa]"))
    if(numDigitado > numMaior){
        numMaior = numDigitado
    }
}

document.write(`O maior número foi ${numMaior}`)