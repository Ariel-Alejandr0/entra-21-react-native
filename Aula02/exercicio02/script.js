var nomealuno
let idadealuno;
// entrada do nome do aluno
nomealuno = prompt("Digite o nome do aluno")
idadealuno = parseInt(prompt("Digite a idade do aluno"))

document.write(`Seja bem-vindo <strong>${nomealuno}</strong>! `)

document.write(`Você tem <strong>${idadealuno}</strong> anos <br>`)

nomealuno = prompt("Digite o nome de outro aluno: ")
idadealuno = parseInt(prompt("digite oa idade do aluno: "))
idadealuno += 10

console.log(`<br>O nome do outro aluno é <strong>${nomealuno}</strong>!! `)
console.log(`A idade desse aluno é <strong>${idadealuno}</strong>`)

