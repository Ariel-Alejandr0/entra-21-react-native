var nomes = []

//entrada
for(let i = 0; i < 5; i++){
    nomes[i] = prompt(`Digite o nome da pessoa ${i}`)
}

//saída
for(let i = 0; i < 5; i++){
    document.write(`pessoa ${i}: ${nomes[nomes.length - i - 1]}`)
}
