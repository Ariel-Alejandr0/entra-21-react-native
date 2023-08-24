let numDigitado;

while(numDigitado != 0){
    numDigitado = parseInt(prompt("Digite um número Inteiro [0 para o programa]"))
    if(numDigitado % 2 != 0){
        document.write(numDigitado + " ")
    }
}

