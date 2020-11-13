class Game{
    constructor(){}
    getState(){
        var gameStateRef=database.ref('gamestate');
        gameStateRef.on("value",function(data){gamestate=data.val()})
    }
    update(state){
        database.ref('/').update({gamestate:state})
    }
    async start(){
        if(gamestate==0){
            player=new Player()
            var playerCountRef=await database.ref('playercount').once("value");
            if(playerCountRef.exists()){
                playercount=playerCountRef.val()
                player.getCount()
            }
            
            form=new Form()
            form.display()
        }
       /* car1=createSprite(100,200)
        car1.addImage("car1",car1img)
        car2=createSprite(300,200)
        car2.addImage("car2",car2img)
        car3=createSprite(500,200)
        car3.addImage("car3",car3img)
        car4=createSprite(700,200)
        car4.addImage("car4",car4img)
        cars=[car1,car2,car3,car4]*/



    }

    

    play(){
        form.hide()
        form.next()
        //textSize(30)
        //text("game start",120,100)
        Player.getPlayerInfo()
        //player.getCarsatend()
        if(allplayers!==undefined){
    background("white")
    //image(trackIMG,0,-displayHeight*4,displayWidth,displayHeight*5)
            //var displayPosition=130
/*var index=0
var x=175,y;
            for(var plr in allplayers){
                index=index+1
                x=x+200
                y=displayHeight-allplayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(index==player.index){
                    stroke(10)
                    fill("red")
                    ellipse(x,y,60,60)
                    cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y*/
                }
            
                /*if(plr=="player"+player.index){
                    fill("red")
                }else{
                    fill("black")
                }
            
            displayPosition+=20
            textSize(15)
            text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayPosition)*/
      /*  }}
    
    if(keyIsDown(UP_ARROW) && player.index!==null){
        player.distance+=10
        player.update()

    }
    if(player.distance>3860){
        gamestate=2;
        player.rank=player.rank+1
        Player.upadtecarsatend(player.rank)
    }
    drawSprites();

}*/
/*end(){
    console.log("gameOver")
    console.log(player.rank)
}*/
    }

paragraph(){
    
   // if(gamestate===3){
    textSize(20)
    fill("blue")
    text("Hello "+player.name,displayWidth/2+25,displayHeight/2-50)
    text("Welcome to MY FIRST LEARNING APP.\n Here you can practice numbers and alphabets with fun games and activites.\n     So are you ready my little friends to enjoy the world of learning with fun.\n  Come on! ",displayWidth/2-50,displayHeight/2+50)
//}
}
}