let numElementos = parseInt(prompt("Digite a quantidade de elementos desse array"))
let vetPessoas = Array.from({ length: numElementos })
let continua = true



for (let i = 0; i < vetPessoas.length; i++) {
    vetPessoas[i] = prompt(`Digite o nome da ${i}ª pessoa`).toLowerCase()
}

console.log(vetPessoas)

do {

    let escolha = parseInt(prompt(`======== MENU ========
    1) Cadastar nome
    2) Pesquisar nome
    3) Listar todos os nome
    0) Sair do programa`))

    if (escolha === 1) {
        let cadastroPessoa = prompt("Digite o nome da pessoa").toLocaleLowerCase()
        vetPessoas.push(cadastroPessoa)
        console.log(vetPessoas)

    } else if (escolha === 2) {
        let pessoa = prompt("Digite o nome da pessoa para pesquisar").toLocaleLowerCase()
        let lugar = vetPessoas.indexOf(pessoa) //encontra a posição da pessoas
        
        if(lugar != -1){
            alert(`${pessoa} está localizada no indice ${lugar}`)
        }else{
            alert("Pessoa não encontrada!!")
        }

    } else if (escolha === 3) {
        alert(vetPessoas.toString())
    } else {
        continua = false
    }

} while (continua == true)

console.log(vetPessoas)
