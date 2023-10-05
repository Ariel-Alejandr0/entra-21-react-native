interface I_pessoa { //criando os atributos de cada pessoa
    cpf            : string,
    nome_pessoa    : string,
    data_nascimento: string,
    nome_vacina    : string,
    data_vacina    : Date,
    data_reforco   : Date
}
const pessoas : I_pessoa[] = [] //criando um Array de pessoas


function salvarCadastro(){
    const c_cpf = document.getElementById('cpf')
    const c_nome_pessoa = document.getElementById('nome_pessoa')
}



const formulario = document.getElementById("cadastro-form");
formulario?.addEventListener("submit", function(e) { //verifica se o cadastro foi enviado
    e.preventDefault()
    salvarCadastro()
})
