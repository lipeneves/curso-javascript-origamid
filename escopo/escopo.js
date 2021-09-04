var carro = 'Gol';

function testandoEscopo(){
  
  return carro;
}

console.log(testandoEscopo());
console.log(carro);

if(false){
  var bicicleta = 'Caloi Poti';
}

console.log(bicicleta);
{
const MAX_TAMANHO = 500;
}
const MAX_TAMANHO = 200;

console.log(MAX_TAMANHO);