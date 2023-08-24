let salario = parseFloat(prompt("Digite o seu salário: "))
let percentualDeAumento 
let valorAumento
let valorFinal


if(salario <= 280){
    percentualDeAumento = 20
} else if (salario > 280 && salario <= 700){
    percentualDeAumento = 15
} else if (salario > 700 && salario <= 1500){
    percentualDeAumento = 10
} else if (salario > 1500){
    percentualDeAumento = 5
}

valorAumento = percentualDeAumento * salario / 100
valorFinal = valorAumento + salario

document.write(`salário ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} | percentual de aumento: ${percentualDeAumento}% | aumento: ${valorAumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} | salario final: ${valorFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)




