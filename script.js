
let video = document.getElementById("video");
let btControles = document.getElementById("btControles")

function play(){

    if(video.paused){
        let play = document.getElementById("play");
        video.play();
        play.src="/assets/images/stop.png";

    } else {
        let play = document.getElementById("play");
        video.pause();
        play.src="/assets/images/play.png";
        
    }



   /* if(video.paused){
        video.play()
        btControles.children[0].src="/assets/images/stop.png"

    } else {
        video.pause();
        btControles.children[0].src="/assets/images/play.png"
        
    }
    */
}

function parar(){
    video.pause();
    video.currentTime = 0;

    if(video.paused){
        let play = document.getElementById("play");
        play.src="/assets/images/play.png";

    } else {
        let play = document.getElementById("play");
        play.src="/assets/images/stop.png";
        
    }

    
}

function avancar(){
    video.currentTime += 15;
    
}

function voltar(){
    video.currentTime -= 15;
    
}

function aumentarVel(){
    video.playbackRate += 0.1;
    
    
}

function diminuirVel(){
    video.playbackRate -= 0.1;
    
}

function apareceBt(){
    btControles.className = "controle"
}

function escondeBt(){
    btControles.className = "esconde"
}

function aumentarVol(){
    video.volume += 0.1;
}

function diminuirVol(){
    video.volume -= 0.1;
}
