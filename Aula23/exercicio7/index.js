var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PessoaFisica = /** @class */ (function () {
    function PessoaFisica(documento, nome, email) {
        this.documento = documento;
        this.nome = nome;
        this.email = email;
    }
    PessoaFisica.prototype.listarDados = function () {
        console.log("Documento:\t ".concat(this.documento));
        console.log("nome \t:\t ".concat(this.nome));
        console.log("email \t:\t ".concat(this.email));
    };
    return PessoaFisica;
}());
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(documeto, nome, email) {
        return _super.call(this, documeto, nome, email) || this;
    }
    return PessoaJuridica;
}(PessoaFisica));
var ariel = new PessoaFisica("123456789", "Ariel", "ariel@email.com");
var compania = new PessoaJuridica("987654321", "Google", "contato@google.com");
ariel.listarDados();
compania.listarDados();
