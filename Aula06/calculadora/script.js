let operacao, numero1, numero2, resultado;



operacao = prompt("Informe a operação.")
numero1 = parseFloat(prompt("Informe o primeiro número"))
numero2 = parseFloat(prompt("Digite o segundo número"))


//usando switch

switch (operacao) {
    case '+':
        resultado = numero1 + numero2
        document.write(`A soma da operação é resultado: ${resultado}`)
        break
        
    case '-':
        resultado = numero1 - numero2
        document.write(`A soma da operação é resultado: ${resultado}`)
        break

    case '*':
        resultado = numero1 * numero2
        document.write(`A soma da operação é resultado: ${resultado}`)
        break

    case '/':
        resultado = numero1 * numero2
        document.write(`A soma da operação é resultado: ${resultado}`)
        break
}
 
if (operacao === '+') {
    resultado = numero1 + numero2
    document.write(`A soma da operação é resultado: ${resultado}`)
} else if (operacao === '-') {
    resultado = numero1 - numero2
    document.write(`A soma da operação é resultado: ${resultado}`)
} else if (operacao === '*') {
    resultado = numero1 * numero2
    document.write(`A soma da operação é resultado: ${resultado}`)
} else if (operacao === '/') {
    resultado = numero1 / numero2
    document.write(`A soma da operação é resultado: ${resultado}`)
}           