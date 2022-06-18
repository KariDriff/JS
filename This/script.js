function calculaIdade(anos) {
 return `Daqui a ${anos} anos, ${this.nome} terá ${
  this.idade + anos
 } anos de idade`
}

const pessoa1 = {
 nome: "Kaio",
 idade: 15,
}

const pessoa2 = {
 nome: "Alberth",
 idade: 16,
}

const pessoa3 = {
 nome: "Paixão",
 idade: 10,
 raca: "Hot Valley",
}

console.log(calculaIdade.apply(pessoa1, [30]))