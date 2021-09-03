//Função área quadrada
function areaQuadrada(area){
  console.log(area * area);
}

areaQuadrada(2);

//Funções podem ser parametros
addEventListener('click', ()=>{console.log('Oi');})

function testeClique(){
  console.log('Clicou');
}

addEventListener('click', testeClique);

//Testando Escopo Léxico
var idade = 26;

function alteraIdade(){
  var idade = 29;
  function funcaoFilha(){
    idade = 26;
  }
}