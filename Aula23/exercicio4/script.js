class PessoaFisica {
  constructor(documento, nome, email) {
    this.documento = documento;
    this.nome      = nome;
    this.email     = email;
  }

  listarDados() {
    console.log(`Documento: ${this.documento}`)
    console.log(`Nome: ${this.nome}`);
    console.log(`E-mail: ${this.email}`);
  }
}

const pessoa1 = new PessoaFisica("123456789", "My company", "contato@mycompany.com");
pessoa1.listarDados();