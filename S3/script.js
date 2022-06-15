// Arrays
{


 // let array = ["String", 1,true];
 // console.log(array);

 let array = ["String", 1, true, ["Array1"], ["Array2"], ["Array3"], ["Array4"]];
 // console.log(array);

 // forEach

 // array.forEach(function(item, index) {console.log(item, index)});

 // Push

 // array.push(["Array5"]);
 // console.log(array);

 // Pop

 // array.pop();
 // console.log(array)

 // Shift

 // array.shift();
 // console.log(array);

 // Unshift

 // array.unshift("Novo Item");
 // console.log(array);

 // IndexOf

 // console.log(array.indexOf(true));

 // Splice

 // array.splice(0, 3);
 // console.log(array);

 // Slice

 // let novoArray = array.slice(0, 3);
 // console.log(novoArray);
}

// Objetos
{
 let object = {string: "String", number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: ["array"]}};
 console.log(object.objectInterno);

 var string = object.string;
 console.log(string);

 var array = object.array;
 console.log(array);
 
 var {string, boolean, objectInterno} = object;
 console.log(string, boolean, objectInterno)
}