console.log("Welcome to Spotify");

//initialize variables

let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar= document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));


let songs = [
    {songName: "Warriyo - Mortals ", filePath:"songs/1.mp3", coverPath: "covers/1.jpg" },
    {songName: "Cleleo - Muma-Muma", filePath:"songs/2.mp3", coverPath: "covers/2.jpg" },
    {songName: "DEAF KEV - Invincible", filePath:"songs/3.mp3", coverPath: "covers/3.jpg" },
    {songName: "Different Heaven and Ethide - My Heart", filePath:"songs/4.mp3", coverPath: "covers/4.jpg" },
    {songName: "Janji- Heroes-Tonight-FeatJohning", filePath:"songs/5.mp3", coverPath: "covers/5.jpg" },
    /*{songName: "Salam-e-ishq", filePath:"songs/6.mp3", coverPath: "covers/6.jpg" },
    {songName: "Salam-e-ishq", filePath:"songs/7.mp3", coverPath: "covers/7.jpg" },
    {songName: "Salam-e-ishq", filePath:"songs/8.mp3", coverPath: "covers/8.jpg" },
    {songName: "Salam-e-ishq", filePath:"songs/9.mp3", coverPath: "covers/9.jpg" },
    {songName: "Salam-e-ishq", filePath:"songs/10.mp3", coverPath: "covers/10.jpg" },*/
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})




//audioElement.play(); 

//handle play/pause click

masterPlay.addEventListener("click",()=> {
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity =0;
    }
})

//listen to events

audioElement.addEventListener('timeupdate' ,()=>{
    //console.log("timeupdate");
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change",() =>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove=("fa-pause-circle");
        element.classList.add=("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        masterSongName.innerText = songs[songIndex].songName;
        e.target.classList.remove=("fa-pause-circle");
        e.target.classList.add=("fa-circle-play");
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        gif.style.opacity =1;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-pause-circle");

    })
})

document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>4){
        songIndex=0;
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    gif.style.opacity =1;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause-circle");
})

document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=0;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    gif.style.opacity =1;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause-circle");
})
