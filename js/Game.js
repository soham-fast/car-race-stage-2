class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

play(){
    form.hide();
    text("GAME START",120,100);
    Player.getPlayerInfo();//allPlayers
    if(allPlayers !==undefined){
  //arrays - for in loops  
    var yValue=150
    for(var plr in allPlayers ){
      if(plr==="player"+player.index){
        fill("red")
       } else {
        fill("black")
       }

     yValue=yValue+30
    text(allPlayers[plr].name + " :" + allPlayers[plr].distance,120,yValue);
    }  

      
    }

    if(keyDown("UP_ARROW")){
      player.distance=player.distance+50;
      player.update();
    }

}
  
}
