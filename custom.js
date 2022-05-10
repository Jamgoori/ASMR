let audio = document.getElementById('myaudio');
let playPause_btn = document.getElementById('playPause_btn');
let count = 0;

function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        playPause_btn.innerHTML = "Pause";
    }
    else{
        count = 0;
        audio.pause();
        
        playPause_btn.innerHTML = "Play";
    }
}

function stop(){
    playPause()
    audio.pause();
    audio.currentTime= 0;
    
    playPause_btn.innerHTML = "Play";
}