let numDigitado = 0
let soma = 0
let contador = 0
let continua = true


while(continua){
    numDigitado = parseInt(prompt("Digite um número Inteiro [-1 para o programa]"))

    if(numDigitado === -1){
        break
    }

    soma += numDigitado
    contador++
}
document.write(`A média dos números digitados é ${(soma / contador).toFixed(2)}`)

