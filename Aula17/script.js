let pessoa = {
    cpf: "861.943.449-70",
    nome: "Enrico Daniel Heitor Gomes",
    dataNascimento: "03/08/2005"

}

let dadosBancários = {
    banco: "001",
    agencia: 2420,
    contaCorrente: "18221-9"
}

pessoa.estadoCivil = "casado"

console.log(pessoa);
Object.assign(pessoa, dadosBancários)
console.log(pessoa)
delete pessoa.dataNascimento
console.log(pessoa)

console.log(Object.keys(pessoa))
