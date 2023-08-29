var numeros = []
var soma = 0 

//entrada
for(let i = 0; i < 5; i++){
    numeros[i] = parseFloat(prompt(`Digite um número para o indice ${i}:`))
}

//saída
for(let i = 0; i < 5; i++){
    soma += numeros[i]
}

document.write(`O somatório dos números digitados é ${soma}`)