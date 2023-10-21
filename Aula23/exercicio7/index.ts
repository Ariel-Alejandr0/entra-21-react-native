class PessoaFisica{
    protected documento : string;
    protected nome      : string;
    protected email     : string;

    public constructor(documento : string, nome : string, email : string){
        this.documento = documento;
        this.nome      = nome;
        this.email     = email;
    }

    public listarDados() : void{
        console.log(`Documento:\t ${this.documento}`);
        console.log(`nome \t:\t ${this.nome}`);
        console.log(`email \t:\t ${this.email}`)
    }
}

class PessoaJuridica extends PessoaFisica{
    public constructor(documeto : string, nome : string, email : string){
        super(documeto, nome, email);
    }
}
let ariel    = new PessoaFisica("123456789", "Ariel", "ariel@email.com");
let compania = new PessoaJuridica("987654321", "Google", "contato@google.com")
ariel.listarDados();
compania.listarDados();