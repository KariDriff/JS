function atividade4() {
 const num1 = Number(prompt("Digite o primeiro valor:"));
 const num2 = Number(prompt("Digite o segundo valor:"));
 
 function recomecar() {
  let resposta = prompt("Deseja recomeçar? (y/n)");

  if (resposta == "y" || resposta == "Y") {
   atividade4();
  } else if (resposta == "n" || resposta  == "N") {
   alert("Tchau :D");
  } else {
   alert("Erro 2/4 - Use y para sim ou n para não");
   recomecar();
  }
 }

 if (!num1 && !num2 && (num1 != 0 && num2 != 0)) {
  alert("Erro 1/4 - Use apenas números.");
  recomecar();
 } else if (num1 == 0 && num2 == 0) {
  
  let resp1;
  let resp2;

  if (num1 == num2) {
   resp1 = `Os números ${num1} e ${num2} são iguais.`;
  } else if (num1 != num2) {
   resp1 = `Os números ${num1} e ${num2} não são iguais.`;
  } else {
   alert("Erro 3/4 - Que bruxaria é essa?")
  }

  if (num1 + num2 > 10 && num1 + num2 < 20) {
   resp2 = `Sua soma é ${(num1 + num2)}, que é maior que 10 e menor que 20`;
  } else if (num1 + num2 < 10) {
   resp2 = `Sua soma é ${(num1 + num2)}, que é menor que 10 e menor que 20`;
  } else if (num1 + num2 > 20) {
   resp2 = `Sua soma é ${(num1 + num2)}, que é maior que 10 e maior que 20`;
  } else if (num1 + num2 == 10) {
   resp2 = `Sua soma é ${(num1 + num2)}, que é igual a 10 e menor que 20`;
  } else if (num1 + num2 == 20) {
   resp2 = `Sua soma é ${(num1 + num2)}, que é maior que 10 e igual a 20`;
  } else {
   alert("Erro 4/4 - Como você chegou aqui?");
   recomecar();
  }

  alert(`${resp1} ${resp2}`);
  recomecar();
 } else {
  let resp1;
  let resp2;

  if (num1 == num2) {
   resp1 = `Os números ${num1} e ${num2} são iguais.`;
  } else if (num1 != num2) {
   resp1 = `Os números ${num1} e ${num2} não são iguais.`;
  } else {
   alert("Erro 3/4 - Que bruxaria é essa?")
  }

  if (num1 + num2 > 10 && num1 + num2 < 20) {
   resp2 = `Sua soma é ${(num1 + num2)}, que é maior que 10 e menor que 20`;
  } else if (num1 + num2 < 10) {
   resp2 = `Sua soma é ${(num1 + num2)}, que é menor que 10 e menor que 20`;
  } else if (num1 + num2 > 20) {
   resp2 = `Sua soma é ${(num1 + num2)}, que é maior que 10 e maior que 20`;
  } else if (num1 + num2 == 10) {
   resp2 = `Sua soma é ${(num1 + num2)}, que é igual a 10 e menor que 20`;
  } else if (num1 + num2 == 20) {
   resp2 = `Sua soma é ${(num1 + num2)}, que é maior que 10 e igual a 20`;
  } else {
   alert("Erro 4/4 - Como você chegou aqui?");
   recomecar();
  }

  alert(`${resp1} ${resp2}`);
  recomecar();
 }
}

atividade4();