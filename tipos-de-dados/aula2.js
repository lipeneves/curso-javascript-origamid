//Vericando o tipo de uma váriavel
var simbolo = null;
console.log(typeof simbolo);

//Concatenação simples
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(typeof frase);

//Testando concatenação de number com uma string de número
var ano = '2021';
var mes = 8;
console.log(ano + mes);

//Como ignorar um caractere especial
var frase2 = "Esse é o \"melhor\" jogo";
console.log(frase2);

//Template String
var time = "Vasco"
var frase3 = `${time} é o melhor time`;
console.log(frase3);