let cachorro = {
  raca:       "viralata",
  cor:        "preto",
  altura:      15,
  comprimento: 30,
  peso:        3.6,
  latir:       true,
}

let pincher = Object.assign({}, cachorro)
pincher.raca = "pincher"

console.log(cachorro)
console.log(pincher)