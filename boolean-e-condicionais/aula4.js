
//Testando a chamada de uma var local
if (false){
  var x = 10;
  console.log('É verdadeiro');
}

//console.log(x);

//Tipos de false - NaN, 0, false, undefined, null, '', "", ``; O resto é true
var nome = '';

if(nome){
  console.log('Nome existe');
}else{
  console.log('Nome não existe');
}


var desBrasil = '1500';

//Comparação normal
if (desBrasil == 1500){
  console.log(true);
}else{
  console.log(false);
}

//Comparação estrita
if (desBrasil === 1500){
  console.log(true);
}else{
  console.log(false);
}

//Condicional com valores
var condicional = 'Cão' && 'Gato';
var condicional2 = (5-5) && (2*2);
var condicional3 = (5-5) || (2*2) && 'Teste';
console.log(condicional);
console.log(condicional2);
console.log(condicional3);