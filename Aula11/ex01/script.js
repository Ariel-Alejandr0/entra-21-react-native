vetNumeros = []
vetPares = []
vetImpares = []

for (let i = 0; i < 6; i++) {
    vetNumeros[i] = prompt(`Digite o número para a posição ${i + 1}: `)
}
for (let i = 0; i < 6; i++) {
    if (vetNumeros[i] % 2 == 0){
        vetPares.push(vetNumeros[i]) 
    }else{
        vetImpares.push(vetNumeros[i])
    }
}

document.write(`Números pares: ${vetPares}<br>`)
document.write(`Quantidade números impares: ${vetImpares.length}<br>`)
document.write(`Números impares: ${vetImpares}<br>`)