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

 async  start(){
    if(gameState === 0){
      player = new Player();
var playerCountRef=await database.ref("playerCount").once("value")
if(playerCountRef.exists())
{
playerCount=playerCountRef.val()
player.getCount()



}


     
      form = new Form()
      form.display();
    }
  }
play(){
form.hide()
text("Game Starts",100,100)
Player.getPlayerInfo()
if(allPlayers!==undefined){

var dispos=200
  for(var plr in allPlayers){

    if(plr==="player"+player.index){
fill("red")

    }else
    {
      fill("black")
    }
dispos=dispos+20
text(allPlayers[plr].name +": " + allPlayers[plr].distance,150,dispos)

  }




}
if(keyIsDown(UP_ARROW)&&player.index!==null){
player.distance=player.distance+50
player.update()


}






}








}




