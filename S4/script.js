// If
{
 var jogador1 = 0;
 var jogador2 = 1;
 var placar;

 jogador1 != -1 && jogador2 != -1 ? console.log("Jogadores válidos.") : console.log("Jogadores inválidos.");


 if (jogador1 > 0 && jogador2 == 0) {
  console.log("Jogador 1 pontuou.");
  placar = jogador1 > jogador2;
 } else if (jogador2 > 0 && jogador1 == 0) {
  console.log("Jogador 2 pontuou.");
  placar = jogador2 > jogador1;
 } else {
  console.log("Ninguém pontuou.");
 }
}

// Switch
{
 switch (placar) {
  case placar = jogador1 > jogador2:
   console.log("Jogador 1 ganhou.")
   break
  case placar = jogador2 > jogador1:
   console.log("Jogador 2 ganhou.")
   break
  default:
   console.log("Ninguém ganhou")
 }
}

// Estruturas de repetição
{
 let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];
 let object = {propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3"};

 // For

 for (let indice = 0; indice < array.length; indice++) {
  console.log(indice);
 }

 // For In

 for (let i in array) {
   console.log(i);
 }

 for (i in object) {
  console.log(i)
 }

 // For Of

 for (i of array) {
  console.log(i);
 }

 for (i of object.propriedade1) {
  console.log(i);
 }

 // While

 var a = 0;

 // while (a < 10) {
 //  a++;
 //  console.log(a);
 // }

 // Do While

 do {
  a++;
  console.log(a);
 } while (a < 10);
}