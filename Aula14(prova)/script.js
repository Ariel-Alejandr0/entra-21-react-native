let vetAlunos = []
let matNotas = []    //matrizes e vetores iniciais
let vetMedias = []
let vetFrequencia = []
let vetSituacao = [] 



alert("ESTE PROGRAMA RODA NO CONSOLE")

for(let i = 0; i < 2; i++){

    vetAlunos[i] = prompt(`Digite o nome do ${i + 1}º aluno: `)
    vetFrequencia[i] = parseFloat(prompt(`Digite a a frequencia do aluno ${vetAlunos[i]} em %:`))

    let vetNotas = []
    let soma = 0

    for (let j = 0; j < 4; j++) { // receber as 4 provas
        vetNotas[j] = parseFloat(prompt(`Digite a ${j + 1}ª nota do aluno ${vetAlunos[i]}: `))
        soma += vetNotas[j]
    }

    vetMedias[i] = soma / vetNotas.length //calcular média e adicionar-la ao vetor
    matNotas[i] = vetNotas // adiciona o vetor de notas do aluno na matriz de notas


    //condicionais para saber a situação do aluno

    if (vetFrequencia[i] < 75) {
        vetSituacao[i] = "REPROVADO por frequencia"
    }
    else if (vetMedias[i] < 5.5) {
        vetSituacao[i] = "REPROVADO"
    }
    else if (vetMedias[i] < 7.5) {
        vetSituacao[i] = "RECUPERAÇÃO"
    }
    else if (vetMedias[i] >= 7.5) {
        vetSituacao[i] = "APROVADO"
    }
}

//saída

console.log("****************** Boletim Escolar ***********************")
for (let i = 0; i < 10; i++) {
    console.log(`\tAluno: ${vetAlunos[i]} \tSituação: ${vetSituacao[i]}`)
    console.log(`\tNotas: ${matNotas[i].toString()} \tMédia: ${vetMedias[i].toFixed(2)}`)
    console.log("***********************************************************")
}