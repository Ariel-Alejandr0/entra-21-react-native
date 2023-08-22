//inicialização das variáveis

let situacao1 = ""
let lersituacao2 = ""
let situacao3 = ""
let situacao4 = ""
let contSituacao1 = 0
let contSituacao2 = 0
let contSituacao3 = 0
let contSituacao4 = 0

alert("Atendimento pronto socorro")


// processamento das pessoas

let pessoa; 
let situacaopessoa;

for(var i = 1; i <= 6; i++){
    pessoa = prompt("Digite o nome da pessoa " + i)
    situacaopessoa = parseInt(prompt(`Digite a situação da pessoa:\n
                1 - Emergencia  \n
                2 - Pronto atendimento  \n
                3 - Pouco urgente  \n
                4 - Não urgente`))

    switch(situacaopessoa){
        case 1:
            situacao1 += pessoa + ", "
            contSituacao1++
            break
        case 2:
            situacao2 += pessoa + ", "
            contSituacao2++
            break
        case 3:
            situacao3 += pessoa + ", "
            contSituacao3++
            break
        case 4:
            situacao4 += pessoa + ", "
            contSituacao4++
            break
    }
}

document.write(`<h1>Relatório</h1>`)
document.write(`1 - Emergencia (${contSituacao1} pessoa(s)): ${situacao1} <br>
                2 - Pronto atendimento (${contSituacao2} pessoa(s)): ${situacao2} <br>
                3 - Pouco urgente (${contSituacao3} pessoa(s)): ${situacao3} <br>
                4 - Não urgente (${contSituacao4} pessoa(s)): ${situacao4} `)