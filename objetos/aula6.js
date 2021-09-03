var pessoa = {
  nome: 'Felipe',
  idade: 26,
  possuiFaculdade: false,
  altura: 1.80
}

var calculos = {
  lados: 4,

  lixo: '#ccc',

  perimetro: function(lado){
    return this.lados * lado;
  }
}

console.log(pessoa.nome);

console.log(calculos.perimetro(2));

//TUDO É OBJETO

var numeroQualquer = 1.4;
console.log(numeroQualquer.toFixed());//Arredonda valor
