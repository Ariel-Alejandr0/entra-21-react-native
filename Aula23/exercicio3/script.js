function Ninja(nome, qtdShuriken) {
  this.nome = nome;
  this.estoqueShuriken = qtdShuriken;

  this.atirarShuriken = function () {
    if (this.estoqueShuriken > 0) {
      console.log("O ninja atirou a Shuriken");
      this.estoqueShuriken--;
      console.log(`Neste momento o ninja ${this.nome} tem ${this.estoqueShuriken} Shurinken(s)!`)
    } else {
      console.log("Sem churikens no momento.")
    }
  }
}

let ariel = new Ninja("Ariel", 2);
console.log(ariel);
ariel.atirarShuriken();