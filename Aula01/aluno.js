var nomealuno
let idadealuno;
// entrada do nome do aluno
nomealuno = prompt("Digite o nome do aluno")
idadealuno = parseInt(prompt("Digite a idade do aluno"))
document.write(`Seja bem-vindo <strong>${nomealuno}</strong>!`)
document.write(typeof nomealuno, "<br>")
document.write(`Você tem <strong>${idadealuno}</strong> anos <br>`)
document.write(typeof idadealuno)
