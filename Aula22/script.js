class ContaBancaria {
    constructor(saldoInicial) {
      var saldo = saldoInicial;
  
      function depositar(valor) {
        saldo += valor;
      }
  
      function sacar(valor) {
        if (saldo >= valor) {
          saldo -= valor;
        } else {
          console.log('Saldo insuficiente.');
        }
      }
  
      this.getSaldo = function () {
        return saldo;
      };
  
      this.depositar = depositar;
      this.sacar = sacar;
    }
  }
  
var conta = new ContaBancaria(1000);
console.log(conta.getSaldo()); // Acesso a um método público para obter o saldo
conta.depositar(500); // Acesso a um método público para depositar
console.log(conta.getSaldo());
conta.sacar(200); // Acesso a um método público para sacar
console.log(conta.getSaldo());  