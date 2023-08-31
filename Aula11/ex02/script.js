vetNumeros = []
vetNegativo = []
soma = 0

for (let i = 0; i < 10; i++) {
    vetNumeros[i] = parseFloat(prompt(`Digite o número para a posição ${i + 1}: `))
}
for (let i = 0; i < 10; i++) {
    if (vetNumeros[i] < 0){
        vetPares.push(vetNumeros[i]) 
    }else{
        soma += vetNumeros[i]
    }
    
}

document.write(`Qtd. números negativos: ${vetNegativo.length}<br>`)
document.write(`Soma dos positivos: ${soma}<br>`)

