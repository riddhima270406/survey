var canvas;

var database;

var playerCount;

var form,player,game;

function setup(){
   canvas = createCanvas(600,800);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}

function draw(){ 
}