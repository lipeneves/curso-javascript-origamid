// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor){
  if (valor){
    return 'Verdadeiro';
  }else{
    return 'Falso';
  }
}

console.log(verificaValor(null));

// Crie uma função matemática que retorne o perímetro de um quadr
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calculaPerimetro(lado){
  return lado * 4;
}
console.log(calculaPerimetro(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Felipe', 'Neves'));


// Crie uma função que verifica se um número é par
function verificaPar(numero){
  if (numero % 2 === 0){
    return 'par';
  }else{
    return 'impar';
  }
}
console.log(verificaPar(25));


// Crie uma função que reto{rne o tipo de
// dado do argumento passado nela (typeof)
function verificaTipo(valor){
  return typeof valor;
}
console.log(verificaTipo(null));


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll' ocorrer

addEventListener('scroll', ()=>{
  console.log('Felipe Neves');
});

var totalPaises = 193;
//Corrija o código abaixo
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
 }
 function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises}`;
 }
 console.log(precisoVisitar(20));
 console.log(jaVisitei(20));