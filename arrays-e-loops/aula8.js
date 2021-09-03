var videogames = ['Switch', 'PS4', 'Xbox'];

// var ultimoConsole = videogames.pop();
// console.log(ultimoConsole);

videogames.push('3DS');

videogames.forEach(function(item, index){
  console.log(item, index);
});