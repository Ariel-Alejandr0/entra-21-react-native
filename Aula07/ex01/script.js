let alunos = ""
let nota = ""
let soma = 0
let media = 0
let situacao = ""
let numeroDeProvas = 0
let qtdAlunos = parseInt(prompt("Digite a quantiade de alunos"))
let qtdNotas = parseInt(prompt("Digite a quantidade de Provas"))

for(let a = 1; a <= qtdAlunos; a++){
    
    soma = 0    // Reinincía as variávais quando o loop voltar
    media = 0   //
    
    alunos = prompt(`Digite o nome do aluno ${a}:`)

    for(let n = 1; n <= qtdNotas; n++){
        nota = parseFloat(prompt(`Digite a ${n}ª nota do aluno ${alunos}:`))
        soma += nota
    }

    media = soma / qtdNotas

    if(media >= 7){
        situacao = "APROVADO"
    }else{
        situacao = "REPROVADO"
    }

    document.write(`Aluno: ${alunos} | Media: ${media.toFixed(2)} | situação: ${situacao} <br>`)
}