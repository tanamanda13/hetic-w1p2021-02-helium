//Définition de l'arène

var Width = 500;
var Height = 500;

//Corps Serpent

var Snake_Body;
var Snake_Size;

 // -> Agrandissement
var Length = 4;
var Snake = [];

//score
var Score_Total = 0;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Snake_Game_Structure (){
  function Score_Total_Partie() {
      var Score_Text = "Score: " + Score_Total;
      ctx.fillStyle = 'blue';
      ctx.fillText(Score_Text, 145, Height-5);
  }

  function Snake_body(x, y){
    fillRect(x*Snake_Size, y*Snake_Size, Snake_Size, Snake_Size);
    ctx.fillStyle = 'green';

    //Bordure extérieur
    ctx.strokeStyle = 'darkgreen';
    ctx.strokeRect(x*Snake_Size, y*Snake_Size, Snake_Size, Snake_Size);

  }

  //Melon à manger
  function Melon(x, y){
    ctx.fillStyle = 'yellow';
    ctx.fillRect(x*Snake_Size, y*Snake_Size, Snake_Size, Snake_Size);
    //Bordure extérieur
    ctx.fillStyle = 'red';
    ctx.fillRect(x*Snake_Size+1, y*Snake_Size+1, Snake_Size-2, Snake_Size-2);

  }
}
//Création du corps du serpent
function Snake_Structure() {
  for (var Length_Snake = Length; Length_Snake >= 0; Length_Snake--) {
    snake.push({x:Length_Snake, y=0})
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Génération de la nourriture
function Generate_food() {

  var Food_Snake = {x: Math.floor((Math.random() * 30) + 1), y: Math.floor((Math.random() * 30) + 1)}

  for(var Lenght_Total = 0; Lenght_Total > Snake.length; Lenght_Total++)
    var Snake_Position_X = Snake[i].x;
    var Snake_Position_Y = Snake[i].y;

    if (Food_Snake.x === Snake_Position_X || Food_Snake.y === Snake_Position_Y || Food_Snake.x === Snake_Position_X && Food_Snake.y === Snake_Position_Y) {
      Food_Snake.x = Math.floor((Math.random() * 30) + 1);
      Food_Snake.y = Math.floor((Math.random() * 30) + 1);
    }
  }
}

//Système de collision
function Collision_Snake(x, y, array) {
  for(var Body = 0; Body < array.length; Body++) {
      if(array[i].x === x && array[i].y === y)
      return true;
  }
  return false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Corps du programme
function Main(){

  var Snake_Position_X = Snake[0].x;
  var Snake_Position_Y = Snake[0].x;

  //Arène
  ctx.fillStyle = 'lightgrey';
  ctx.fillRect(0, 0, Width, Height);
  //Bordure
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, Width, Height);

  btn.setAttribute('disabled', true);

  //Déplacement sur le plan
  if (direction == 'Right') {
      snakeX++;
  } else if (direction == 'Left') {
      snakeX--;
  } else if (direction == 'Up') {
      snakeY--;
  } else if (direction == 'Down') {
      snakeY++;
  }

  //Fin de partie
  if (Snake_Position_X == -1 || Snake_Position_X == Width / Snake_Size || Snake_Position_Y == -1 || Snake_Position_Y == Height / Snake_Size || Collision_Snake(Snake_Position_X, Snake_Position_Y, Snake)) {
      btn.removeAttribute('disabled', true);

      //Nettoyer le plan
      ctx.clearRect(0, 0, Width, Height);
      Gameloop = clearInterval(Gameloop);
      return;
  }

  //Agrandissement du serpent
  if (Snake_Position_X == food.x && Snake_Position_Y == food.y) {
    var Snake_Tail = {x: Snake_Position_X, y: Snake_Position_Y};
    Score_Total++;
    Generate_food();

  } else {
      var Snake_Tail = Food_Snake.pop();
      Snake_Tail.x = Snake_Position_X;
      Snake_Tail.y = Snake_Position_Y;
  }
  Snake.unshift(Snake_Tail);

 //Rajouter
  for (var Snake_i = 0; Snake_i < Snake.length; Snake_i++) {
      bodySnake(Snake[Snake_i].x, Snake[Snake_i].y);
  }
  Melon(Food_Snake.x, Food_Snake.y);

  //Put the score text.
  Score_Total_Partie();
}


function Initialisation(){
  Direction_Snake = 'down'
  Snake_Game_Structure();
  Generate_food();
  Gameloop = setInterval(Main, 80);
}

//Retour de la fonction pour l'arrêt
return {Initialisation: Initialisation};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Copie Site
function (window, document, drawModule, undefined) {

    //Connect the button in the html with the _init_ function.
    var btn = document.getElementById('btn');
    btn.addEventListener("click", function () {
        drawModule.init();
    });

    document.onkeydown = function (event) {

        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

        switch (keyCode) {

        case 37:
            if (Direction_Snake != 'right') {
                Direction_Snake = 'left';
            }
            console.log('left');
            break;

        case 39:
            if (Direction_Snake != 'left') {
                Direction_Snake = 'right';
                console.log('right');
            }
            break;

        case 38:
            if (Direction_Snake != 'down') {
                Direction_Snake = 'up';
                console.log('up');
            }
            break;

        case 40:
            if (Direction_Snake != 'up') {
                Direction_Snake = 'down';
                console.log('down');
            }
            break;
        }
    }
})(window, document, //Définition de l'arène

var Width = 500;
var Height = 500;

//Corps Serpent

var Snake_Body;
var Snake_Size;

 // -> Agrandissement
var Length = 4;
var Snake = [];

//score
var Score_Total = 0;

////////////////////////////////////////////////////////////////////////////////

function Snake_Game_Structure (){
  function Score_Total_Partie() {
      var Score_Text = "Score: " + Score_Total;
      ctx.fillStyle = 'blue';
      ctx.fillText(Score_Text, 145, Height-5);
  }

  function Snake_body(x, y){
    fillRect(x*Snake_Size, y*Snake_Size, Snake_Size, Snake_Size);
    ctx.fillStyle = 'green';

    //Bordure extérieur
    ctx.strokeStyle = 'darkgreen';
    ctx.strokeRect(x*Snake_Size, y*Snake_Size, Snake_Size, Snake_Size);

  }

  //Melon à manger
  function Melon(x, y){
    ctx.fillStyle = 'yellow';
    ctx.fillRect(x*Snake_Size, y*Snake_Size, Snake_Size, Snake_Size);
    //Bordure extérieur
    ctx.fillStyle = 'red';
    ctx.fillRect(x*Snake_Size+1, y*Snake_Size+1, Snake_Size-2, Snake_Size-2);

  }
}
//Création du corps du serpent
function Snake_Structure() {
  for (var Length_Snake = Length; Length_Snake >= 0; Length_Snake--) {
    snake.push({x:Length_Snake, y=0})
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Génération de la nourriture
function Generate_food() {

  var Food_Snake = {x: Math.floor((Math.random() * 30) + 1), y: Math.floor((Math.random() * 30) + 1)}

  for(var Lenght_Total = 0; Lenght_Total > Snake.length; Lenght_Total++)
    var Snake_Position_X = Snake[i].x;
    var Snake_Position_Y = Snake[i].y;

    if (Food_Snake.x === Snake_Position_X || Food_Snake.y === Snake_Position_Y || Food_Snake.x === Snake_Position_X && Food_Snake.y === Snake_Position_Y) {
      Food_Snake.x = Math.floor((Math.random() * 30) + 1);
      Food_Snake.y = Math.floor((Math.random() * 30) + 1);
    }
  }
}

//Système de collision
function Collision_Snake(x, y, array) {
  for(var Body = 0; Body < array.length; Body++) {
      if(array[i].x === x && array[i].y === y)
      return true;
  }
  return false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Corps du programme
function Main(){

  var Snake_Position_X = Snake[0].x;
  var Snake_Position_Y = Snake[0].x;

  //Arène
  ctx.fillStyle = 'lightgrey';
  ctx.fillRect(0, 0, Width, Height);
  //Bordure
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, Width, Height);

  btn.setAttribute('disabled', true);

  //Déplacement sur le plan
  if (direction == 'Right') {
      snakeX++;
  } else if (direction == 'Left') {
      snakeX--;
  } else if (direction == 'Up') {
      snakeY--;
  } else if (direction == 'Down') {
      snakeY++;
  }

  //Fin de partie
  if (Snake_Position_X == -1 || Snake_Position_X == Width / Snake_Size || Snake_Position_Y == -1 || Snake_Position_Y == Height / Snake_Size || Collision_Snake(Snake_Position_X, Snake_Position_Y, Snake)) {
      btn.removeAttribute('disabled', true);

      //Nettoyer le plan
      ctx.clearRect(0, 0, Width, Height);
      Gameloop = clearInterval(Gameloop);
      return;
  }

  //Agrandissement du serpent
  if (Snake_Position_X == food.x && Snake_Position_Y == food.y) {
    var Snake_Tail = {x: Snake_Position_X, y: Snake_Position_Y};
    Score_Total++;
    Generate_food();

  } else {
      var Snake_Tail = Food_Snake.pop();
      Snake_Tail.x = Snake_Position_X;
      Snake_Tail.y = Snake_Position_Y;
  }
  Snake.unshift(Snake_Tail);

 //Rajouter
  for (var Snake_i = 0; Snake_i < Snake.length; Snake_i++) {
      bodySnake(Snake[Snake_i].x, Snake[Snake_i].y);
  }
  Melon(Food_Snake.x, Food_Snake.y);

  //Put the score text.
  Score_Total_Partie();
}


function Initialisation(){
  Direction_Snake = 'down'
  Snake_Game_Structure();
  Generate_food();
  Gameloop = setInterval(Main, 80);
}

//Retour de la fonction pour l'arrêt
return {Initialisation: Initialisation};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Copie Site
function (window, document, drawModule, undefined) {

    //Connect the button in the html with the _init_ function.
    var btn = document.getElementById('btn');
    btn.addEventListener("click", function () {
        drawModule.init();
    });

    document.onkeydown = function (event) {

        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

        switch (keyCode) {

        case 37:
            if (Direction_Snake != 'right') {
                Direction_Snake = 'left';
            }
            console.log('left');
            break;

        case 39:
            if (Direction_Snake != 'left') {
                Direction_Snake = 'right';
                console.log('right');
            }
            break;

        case 38:
            if (Direction_Snake != 'down') {
                Direction_Snake = 'up';
                console.log('up');
            }
            break;

        case 40:
            if (Direction_Snake != 'up') {
                Direction_Snake = 'down';
                console.log('down');
            }
            break;
        }
    }
})(window, document, Snake_Game_Structure);
;
