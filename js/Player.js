class Player {
  constructor(){
    //name,distance,index
    this.distance=0;
    this.name=null;
    this.index=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

//call a function with class name we will create it as static function
  static getPlayerInfo(){
    database.ref("players").on("value",(data)=>{
      allPlayers=data.val();
      
    })
  }
}
