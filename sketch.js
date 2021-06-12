var player1 , player2 , player3 , player4 , player5;
var sumoRing;

function setup(){
    player1 = createSprite(10,300,20,10);
    player2 = createSprite(20,200,20,10);
    player3 = createSprite(30,100,20,10);
    player4 = createSprite(200,200,20,10);
    player5 = createSprite(300,300,20,10);
}

function draw(){
    
    background = "green";
    canvas = (600,600);
    player1.display();
    player2.display();
    player3.display();
    player4.display();
    player5.display();
}