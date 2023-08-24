let soma = 0

for(var i = 0; i <= 100; i += 2){
    document.write(i + " -> ")
    soma += i
}
document.write(`<br>O somatório dos numero é: ${soma}`)