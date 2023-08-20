let salario =  parseFloat(prompt("Digite o seu salário mensal: "))
let horasmensais = parseInt(prompt("Digite a quantidade de horas trabalhadas mensalmente: "))
let valorhora = (salario / horasmensais).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

document.write(`Tu ganhas ${valorhora} por hora.`)
