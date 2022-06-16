// Calculadora eeeee
{
 function calculadora() {
  const operacao = Number(prompt("Escolha uma oeração:\n 1 - Adição (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão (/) \n 5 - Sobra (%) \n 6 - Potenciação (**)"));
  
  if (!operacao || operacao >= 7) {
   alert("Erro 1 - Operação inválida. Utilize números de 1 a 6.")
   calculadora()
  } else {
   let n1 = Number(prompt("Digite o primeiro valor:"));
   let n2 = Number(prompt("Digite o segundo valor:"));
   let r;

   if (!n1 || !n2) {
    alert("Erro 2 - Valores inválidos. Utilize apenas números.")
    calculadora()
   } else {
    function adicao() {
     r = n1 + n2;
     alert(`${n1} + ${n2} = ${r}`)
     novaOperacao();
    }

    function subtracao() {
     r = n1 - n2;
     alert(`${n1} - ${n2} = ${r}`)
     novaOperacao();
    }

    function multiplicacao() {
     r = n1 * n2;
     alert(`${n1} * ${n2} = ${r}`)
     novaOperacao();
    }

    function divisao() {
     r = n1 / n2;
     alert(`${n1} / ${n2} = ${r}`)
     novaOperacao();
    }

    function sobra() {
     r = n1 % n2;
     alert(`A sobra da divisão ${n1} / ${n2} é ${r}`)
     novaOperacao();
    }

    function potenciacao() {
     r = n1 ** n2;
     alert(`${n1} ^ ${n2} = ${r}`)
     novaOperacao();
    }

    function novaOperacao() {
     let opcao = prompt("Deseja fazer uma nova operação? \n 1 - Sim \n 2 - Não")

     if (opcao == 1) {
      calculadora()
     } else if (opcao == 2) {
       alert("Obrigado por me usar! :)")
     } else {
      alert("Erro 3 - Resposta inválida. Digite 1 para sim ou 2 para não.")
      novaOperacao()
     }
    }

    // if (operacao == 1) {
    //  adicao();
    // } else if (operacao == 2) {
    //  subtracao();
    // } else if (operacao == 3) {
    //  multiplicacao();
    // } else if (operacao == 4) {
    //  divisao();
    // } else if (operacao == 5) {
    //  sobra();
    // } else if (operacao == 6) {
    //  potenciacao();
    // }

    switch (operacao) {
     case 1:
      adicao();
      break;
     case 2:
      subtracao();
      break;
     case 3:
      multiplicacao();
      break;
     case 4:
      divisao();
      break;
     case 5:
      sobra();
      break;
     case 6:
      potenciacao();
      break;
    }
   }
  }
 }
 calculadora();
}