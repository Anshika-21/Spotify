console.log("Welcome to spotify");

let songIndex=0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let mybar = document.getElementById('mybar');
let songitem= Array.from(document.getElementsByClassName("songitem"));

let songs=[
    {songName: "Let me down slowly", filepath: "songs/1.mp3"},
    {songName: "Love me like you do", filepath: "songs/2.mp3"},
    {songName: "Slow grenade", filepath: "songs/3.mp3"},
    {songName: "Closer", filepath: "songs/4.mp3"},
    {songName: "Why do I", filepath: "songs/5.mp3"},
    {songName: "Him and I", filepath: "songs/6.mp3"},
    {songName: "Believer", filepath: "songs/7.mp3"},
]
songitem.forEach((element, i)=>{ 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName; 
})
 

masterplay.addEventListener('click', ()=>{
    
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
    else{
       
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');}
        
})
audioelement.addEventListener('timeupdate', ()=>{
    console.log('time update');
    let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    mybar.value=progress;
})
mybar.addEventListener('change', ()=>{
    //console.log('chnaged');
    audioelement.currentTime=(mybar.value*audioelement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songIndex+1}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    console.log('next');
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioelement.src = `songs/${songIndex+1}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioelement.src = `songs/${songIndex+1}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})