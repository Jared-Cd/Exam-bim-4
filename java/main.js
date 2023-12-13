let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let song_image =document.getElementById("song_image");

song.onloadeddata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");  
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
ctrlIcon.addEventListener("playPause()",()=> {
    song_image.style.animationPlayState = "paused";
 })