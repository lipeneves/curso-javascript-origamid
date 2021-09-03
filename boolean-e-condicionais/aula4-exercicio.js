// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual
var minhaIdade = 26, 
    idadeParente = 32;

if(minhaIdade > idadeParente){
  console.log('Minha idade é maior');
}else if(minhaIdade === idadeParente){
  console.log('Minha idade é igual');
}else{
  console.log('Minha idade é menor');
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

// Compare o total de habitantes do Brasil com China (valor em mi
var brasil = 207;
var china = 1340;

if(china>brasil){
  console.log('China maior');
}else{
  console.log('Brasil maior');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
 console.log('Verdadeiro');
} else {
 console.log('Falso');//Falso
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
 console.log('Gato' && 'Cão');//Cão
} else {
 console.log('Falso');
}