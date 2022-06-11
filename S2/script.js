// Primitive types

// Boolean
var vOuF = false;
console.log(typeof(vOuF));

// Number
var numero = 1;
console.log(typeof(numero))

// String
var nome = "Kaio";
console.log(typeof(nome))

// Function
var funcao = function() {}
console.log(typeof(funcao));

// Undefined
var variavel;
console.log(typeof(variavel));

// let
let variavel2 = "Kaio";
variavel2 = "Alberth";
console.log(variavel2);

// const
const constante = "Kaio";
console.log(constante);

// Escopo
var escopoGlobal = "Global";
console.log(escopoGlobal);

function escopoLocal() {
 let escopoLocalInterno = "Local";
 console.log(escopoLocalInterno);
}
escopoLocal();

// Atribuição =
var atribuicao = "Kaio";

// Comparação ==
var comparacao = "0" == 0;
console.log(comparacao);

// Comparação+ ===
var comparacaoDois = "0" === 0;
console.log(comparacaoDois);

// Adição +
var adicao = 1 + 1;
console.log(adicao);

// Subtração -
var subtracao = 2 - 1;

//  Multiplicação *
var multiplicacao = 2 * 3;

// Divisão real /
var divisaoReal = 6 / 2;
console.log(divisaoReal);

// Divisão inteira %
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// Potenciação **
var potenciacao = 2 ** 10;
console.log(potenciacao);

// Maior que >
var maiorQue = 5 > 2;
console.log(maiorQue);

// Menor que <
var menorQue = 5 < 2;
console.log(menorQue);

// Maior ou igual a >=
var maiorOuIgualA = 5 >= 2;
console.log(maiorOuIgualA);

// Menor ou igual a <=
var menorOuIgualA = 5 <= 2;
console.log(menorOuIgualA);

// E &&
var e = true && false;
console.log(e);

// Ou
var ou = true || false;
console.log(ou);

// Não !
var nao = !true;
console.log(nao);