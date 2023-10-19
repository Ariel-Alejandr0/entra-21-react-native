class Lamapada {
  constructor(fabricante, numPeca, staus, tamanho, cor, mateiral, tipoDeFonteDeEneregia, voltagem, potencia, qtdPorPacote, peso, comprimento, qtdLampadas, preco){
    this.fabricante            = fabricante;
    this.numPeca               = numPeca;
    this.staus                 = staus;
    this.tamanho               = tamanho;
    this.cor                   = cor
    this.mateiral              = mateiral
    this.tipoDeFonteDeEneregia = tipoDeFonteDeEneregia
    this.voltagem              = voltagem
    this.potencia              = potencia
    this.qtdPorPacote          =  qtdPorPacote
    this.peso                  = peso
    this.comprimento           = comprimento
    this.qtdLampadas           = qtdLampadas
    this.preco                 = preco
    this.faturamento           = 0
  }

  ligar(){
    console.log("Lampada Ligada com sucesso!")
    this.staus = true;
  }
  desligar(){
    console.log("Lampada Desligada com sucesso!");
    this.staus = false;
  }
  vender(){
    console.log("lamapada vendida com sucesso!")
    this.qtdLampadas--;
    this.faturamento += this.preco;
    console.log("Faturamos: " + this.faturamento);
  }
  comprar(){
    console.log("lamapada comprada com sucesso!");
    this.qtdLampadas++;
    this.faturamento -= this.preco;
    console.log("Faturamos: " + this.faturamento);
  }
  quantidade_no_estoque(){
    let pacotes  = Math.floor(this.qtdLampadas / this.qtdPorPacote);
    let restante = (this.qtdLampadas % this.qtdPorPacote);
    console.log(`Existem ${pacotes} pacotes de lampadas no estoque e restam ${restante} Lampadas!`);
  }
}

let lampadaToshiba = new Lamapada("Toshiba", 123456789, false, 10, "branco", "led", "Elétirca", 220, 25, 4, 0.1, 0.08, 79, 5.9)

lampadaToshiba.ligar();
lampadaToshiba.desligar();
lampadaToshiba.quantidade_no_estoque();
lampadaToshiba.vender();
lampadaToshiba.quantidade_no_estoque();
lampadaToshiba.comprar();
lampadaToshiba.quantidade_no_estoque();