let menorIdade = 0
let jovem = 0
let adulto = 0
let idoso = 0


let vacinas = 0
let numPacientes = 1


// Receber os pacientes, e jogar o valor para cada local de acordo com a idade.
while (numPacientes != 2) {


    var idade = parseInt(prompt('Qual a idade da pessoa?'))


    if (idade < 18) {
        menorIdade += 1
        vacinas += 1
    }
    if (idade > 18 && idade <= 40) {
        jovem += 1
        vacinas += 2
    }
    if (idade > 40 && idade <= 60) {
        adulto += 1
        vacinas += 3
    }
    if (idade > 60) {
        idoso += 1
        vacinas += 4
    }


    numPacientes = prompt('Há mais pacientes?\n1-Sim\n2-Não')
    if (numPacientes == 2) {
        alert('Não há mais pacientes.')


        // Apresentar quantidade de pessoas, vacinas para cada um e número total de vacinas necessárias


    }
}


alert(`O número de pessoas menores de idade é: ${menorIdade}\nO número de pessoas entre 18-40 anos é: ${jovem}\nO número de pessoas entre 40-60 anos é: ${adulto}\nO número de pessoas idosas é: ${idoso}`)


alert('sabe-se que pessoas acima de 60 anos vão precisar de 4 doses.\nEntre 40 e 60, 3 doses.\nDe 18 à 40, 2 doses.\nE abaixo dos 18, 1 dose.')
alert('Agora vamos saber quantas vacinas a clínica/hospital irá precisar')
alert(`O número total de vacinas necessárias é: ${vacinas}`)
