class Game {
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    uplate(state){
        database.ref('/').update({
            gameState: state
        });
    }
    async start(){
        if(gameState === 0){
            player = new player();
            var playerCountRef = await database.ref('playerCount').once('value');
            if(playerCount = playerCountRef.val()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
        monkey_01= createSprite(100,200);
    }
    play(){
        form.hide();
        textSize(30);
        text('Game Start', 120, 100);
        player.getPlayerInfo();
        if(appPlayers !== undefined){
            var displayPosition =  130;
            for(var plr in allPlayers){
                if(plr === 'player'+player.index){
                    fill('red');
                 }else{
                    fill('black');
             }
                displayPosition += 20;
                textSize(15);
                text(appPlayers[plr].name+':'+allPlayers[plr].distance,120, displayPosition);
         }
    }
     if(keyIsDown(UP_ARROW) && player.index !==null){
        player.distance += 50;
        player.update();
    }
  }
}
