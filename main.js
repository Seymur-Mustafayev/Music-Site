//Active Indicator Start//


const activepage=window.location.pathname
const activeLinks=document.querySelectorAll('.navbar-center a').forEach(link=>{
    if(link.href.includes(`${activepage}`)){
          link.classList.add('active');  
          
    }
   
})    
//Active Indicator End//

//Scroll Down Navbar Size Change  Start//

window.onscroll= function(){
    var nav=document.getElementById('navbar')
    
    if(window.pageYOffset>100){
        nav.classList.add('scrollnav');
        
    }
    else{
        nav.classList.remove('scrollnav');
    }
}



//Scroll Down Navbar Size Change  End//



//Responsive Navbar Start //

 const hamburger =document.querySelector(".responsive-bars")
 const menu =document.querySelector(".menu-container")

 hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("active")
    event.preventDefault();
 })




//Responsive Navbar End//




//Event Dropdown Start //
const ger =document.querySelector(".event-input")
const der =document.querySelector(".event-dropdown")

ger.addEventListener("click", ()=>{
   der.classList.toggle("open")
   event.preventDefault();
})


//Event Dropdown End //


//Song PLay Start//

const song=document.getElementById('song');
const play =document.getElementById('play');
const icon=document.getElementById('icon');

function playPause(){
   if(icon.classList.contains("fa-pause")){
    song.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
   }
   else{
    song.play();
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");
   }
   

}
const song2=document.getElementById('song2');
const play2 =document.getElementById('play2');
const icon2=document.getElementById('icon2');

function playPause2(){
    if(icon2.classList.contains("fa-pause")){
        song2.pause();
        icon2.classList.remove("fa-pause");
        icon2.classList.add("fa-play");
       }
       else{
        song2.play();
        icon2.classList.add("fa-pause");
        icon2.classList.remove("fa-play");
       }
       
}
const song3=document.getElementById('song3');
const play3 =document.getElementById('play3');
const icon3=document.getElementById('icon3');

function playPause3(){
    if(icon3.classList.contains("fa-pause")){
        song3.pause();
        icon3.classList.remove("fa-pause");
        icon3.classList.add("fa-play");
       }
       else{
        song3.play();
        icon3.classList.add("fa-pause");
        icon3.classList.remove("fa-play");
       }
       
}
const song4=document.getElementById('song4');
const play4 =document.getElementById('play4');
const icon4=document.getElementById('icon4');

function playPause4(){
   if(icon4.classList.contains("fa-pause")){
    song4.pause();
    icon4.classList.remove("fa-pause");
    icon4.classList.add("fa-play");
   }
   else{
    song4.play();
    icon4.classList.add("fa-pause");
    icon4.classList.remove("fa-play");
   }
   

}

const song5=document.getElementById('song5');
const play5 =document.getElementById('play5');
const icon5=document.getElementById('icon5');

function playPause5(){
   if(icon5.classList.contains("fa-pause")){
    song5.pause();
    icon5.classList.remove("fa-pause");
    icon5.classList.add("fa-play");
   }
   else{
    song5.play();
    icon5.classList.add("fa-pause");
    icon5.classList.remove("fa-play");
   }
   

}
const song6=document.getElementById('song6');
const play6 =document.getElementById('play6');
const icon6=document.getElementById('icon6');

function playPause6(){
   if(icon6.classList.contains("fa-pause")){
    song6.pause();
    icon6.classList.remove("fa-pause");
    icon6.classList.add("fa-play");
   }
   else{
    song6.play();
    icon6.classList.add("fa-pause");
    icon6.classList.remove("fa-play");
   }
   

}
 






//Song PLay End//
let currentMusic=0;
const gar =document.getElementById('far');
const dar=document.getElementById('dar');
const mainsong=document.getElementById('main-song');
const seekBar=document.querySelector('.seek-bar');
const curretTime=document.querySelector('.current-time');
const musicDuration=document.querySelector('.song-duration');
const qar =document.getElementById('dar')
const bar =document.getElementById('qar')


gar.addEventListener("click", ()=>{

    dar.classList.toggle("fa-circle-pause") 
    if(dar.className.includes('fa-circle-pause')){
        mainsong.play();
    }
    else{
        mainsong.pause();
    }

})

bar.addEventListener("click",()=>{
    mainsong.currentTime=0;
    mainsong.pause();
    dar.classList.remove("fa-circle-pause")
})


const setMusic =(i) =>{

   
    setTimeout(()=>{
        seekBar.max=mainsong.duration;
       
        musicDuration.innerHTML=formatTime(mainsong.duration);
       
     },300);
}

setMusic(0)


const formatTime = (time) =>{
    let min= Math.floor(time / 60);
    if(min<10){
        min=`0${min}`;
    }
    let sec= Math.floor(time % 60);
    if(sec<10){
        sec=`0${sec}`;
    }

    return `${min}  : ${sec}`;
}

setInterval(()=>{
    
    seekBar.value=mainsong.currentTime;
    curretTime.innerHTML=formatTime(mainsong.currentTime);
},500)


seekBar.addEventListener('change',()=>{
    mainsong.currentTime=seekBar.value
})

const trackPlay=document.querySelector("playpause-track");
const trackRepeat=document.querySelector("repeat-track");
const track=document.getElementById('track1')
console.log("salam")


