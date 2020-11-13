class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton('continue')
        this.greeting=createElement('h2')
        this.title=createElement('h2')
        //this.standard=createInput("Standard")
        this.age=createInput("Age")
       // this.mno=createInput("Mobile Number")
       this.nb=createButton('Next')
        this.reset=createButton('next')
        // gamestate 4 buttons
        this.nur=createButton('Nursery')
        this.sen=createButton('Senior K.G.')
        this.jun=createButton('Junior K.G.')

    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
        this.title.hide()
        this.age.hide()
        this.nur.hide()
        this.sen.hide()
        this.jun.hide()
        //this.mno.hide()
       // this.standard.hide()
    }
    display(){
       // var title=createElement('h2')
this.title.html("learning app")
this.title.position(displayWidth/2-50,0)

this.input.position(displayWidth/2-40,displayHeight/2-80)
//this.standard.position(displayWidth/2-40,displayHeight/2-60)
this.age.position(displayWidth/2-40,displayHeight/2-40)
//this.mno.position(displayHeight/2-40,displayHeight/2-20)
this.button.position(displayWidth/2+30,displayHeight/2)
//this.reset.position(displayWidth-100,20)
this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    //this.standard.hide()
    //this.mno.hide()
    this.age.hide()
    player.name=this.input.value()
    //player.standard=this.standard.value()
    //player.mno=this.mno.value()
    player.age=this.age.value()
    playercount+=1
    player.index=playercount
    player.update()
    player.updateCount(playercount)
})
}
next(){
    
        this.greeting.html("hello"+player.name)
        this.greeting.position(displayWidth/2-70,displayHeight/4)
    //need to add animations for the welcome .
    //})
    this.nb.mousePressed(()=>{
        //player.updateCount(0)
     //game.update(3)
       gamestate=3
})
}
displayButtons(){
    this.nur.position(displayWidth/2-50,displayHeight/2-10)
    this.sen.position(displayWidth/2,displayHeight/2+10)
    this.jun.position(displayWidth/2+50,displayHeight/2-10)
}
nursery(){
    
    this.nur.mousePressed(()=>{
        gamestate=5;
        this.jun.hide()
        this.sen.hide()

    })
}


}
