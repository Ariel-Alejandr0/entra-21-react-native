interface pessoa { //criando os atributos de cada pessoa
    cpf: string,
    nome_pessoa: string,
    data_nascimento: string,
    nome_vacina: string,
    data_vacina: Date,
    data_reforco: Date
}
const pessoas : pessoa[] = [] //criando um Array de pessoas


function salvarCadastro(){
    
}



const formulario = document.getElementById("cadastro-form") 
formulario?.addEventListener("submit", function(e){ //verifica se o cadastro foi enviado
    e.preventDefault()
    salvarCadastro()
})
