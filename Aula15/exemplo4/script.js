let cuboNum = (numInf, expoente = 3) => Math.pow(numInf, expoente)

num = parseFloat(prompt("Digite um número"))
document.write(`o cubo do numero ${num} número é: ${cuboNum(num)}`)
