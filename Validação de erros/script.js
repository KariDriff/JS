function validacao(array, number) {
 try {
 if (!array && !number) throw new ReferenceError("Insira algo");

 if (typeof array !== "object" || typeof number !== "number") throw new TypeError("Tipos errados");

 if (array.length !== number) throw new RangeError("Valor inválido");

 return array;
 }
 catch(e) {
  if (e instanceof ReferenceError){
   console.log("Reference Errorrrrrr");
   console.log(e.message);
  } else if (e instanceof TypeError){
   console.log("Type Errorrrrrr");
   console.log(e.message);
  } else if (e instanceof RangeError){
   console.log("Range Errorrrrrr");
   console.log(e.message);
  } else {
   console.log("Unexpected Error: " + e);
  }
 }
}

console.log(validacao([1, 2], 2));