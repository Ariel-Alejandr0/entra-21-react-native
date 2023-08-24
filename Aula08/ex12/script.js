let numDigitado = 0


while(numDigitado != -1){
    numDigitado = parseInt(prompt("Digite um número Inteiro [-1 para o programa]"))
    if(numDigitado % 2 == 0){
        document.write(numDigitado + " ")
    }
}

