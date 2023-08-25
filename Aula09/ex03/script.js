let c = prompt('Digite o seu codigo')
let n = parseInt(prompt('Digite as horas trablhadas'))
let salarioPorHora = 10
let salarioHoraExtra = 20


if (n > 50){
    var horasExcedentes = n - 50
    var custoHoraExtra = horasExcedentes * salarioHoraExtra
}else{
    custoHoraExtra = 0
}

document.write(`Salário: ${salarioPorHora * n}| excedente: ${custoHoraExtra}`) 

////INCOMPLETO