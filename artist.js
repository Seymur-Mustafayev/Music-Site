
const activepage=window.location.pathname
const activeLinks=document.querySelectorAll('.navbar-center a').forEach(link=>{
    if(link.href.includes(`${activepage}`)){
          link.classList.add('active');  
          
    }
   
})    


window.onscroll= function(){
    var nav=document.getElementById('navbar')
    
    if(window.pageYOffset>100){
        nav.classList.add('scrollnav');
        
    }
    else{
        nav.classList.remove('scrollnav');
    }}



    const hamburger =document.querySelector(".responsive-bars")
 const menu =document.querySelector(".menu-container")

 hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("active")
    event.preventDefault();
 })



 


 
const trackPlay=document.querySelector(".playpause-track");
const trackRepeat=document.querySelector(".repeat-track");
const track=document.getElementById('track1');
const trackSeek=document.querySelector(".seek-slider");
const trackCurrent=document.querySelector(".current_duration");
const trackTotal=document.querySelector(".total_duration");
const trackPlayBtn=document.getElementById('trackplaybtn');


trackPlay.addEventListener("click",()=>{
     trackPlayBtn.classList.toggle("fa-circle-pause")
     if(trackPlayBtn.classList.contains("fa-circle-pause")){
        track.play()
     }
     else{
        track.pause()
     }
})

trackRepeat.addEventListener("click",()=>{
    track.currentTime=0;
    track.pause()
    trackPlayBtn.classList.remove("fa-circle-pause")
})


const setMusic =(i) =>{

   
    setTimeout(()=>{
        trackSeek.max=track.duration;
       
        trackTotal.innerHTML=formatTime(track.duration);
       
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
    
    trackSeek.value=track.currentTime;
    trackCurrent.innerHTML=formatTime(track.currentTime);
},500)


trackSeek.addEventListener('change',()=>{
    track.currentTime=trackSeek.value
})




const trackPlay2=document.getElementById('playpause-track2');
const trackRepeat2=document.getElementById('repeat-track2');
const track2=document.getElementById('track2');
const trackSeek2=document.getElementById('seek-slider2');
const trackCurrent2=document.getElementById('current_duration2');
const trackTotal2=document.getElementById('total_duration2');
const trackPlayBtn2=document.getElementById('trackplaybtn2');



trackPlay2.addEventListener("click",()=>{
    trackPlayBtn2.classList.toggle("fa-circle-pause")
    if(trackPlayBtn2.classList.contains("fa-circle-pause")){
       track2.play()
    }
    else{
       track2.pause()
    }
})


trackRepeat2.addEventListener("click",()=>{
    track2.currentTime=0;
    track2.pause()
    trackPlayBtn2.classList.remove("fa-circle-pause")
})


const setMusic2 =(i) =>{

   
    setTimeout(()=>{
        trackSeek2.max=track2.duration;
       
        trackTotal2.innerHTML=formatTime(track2.duration);
       
     },300);
}

setMusic2(0)


setInterval(()=>{
    
    trackSeek2.value=track2.currentTime;
    trackCurrent2.innerHTML=formatTime(track2.currentTime);
},500)


trackSeek2.addEventListener('change',()=>{
    track2.currentTime=trackSeek2.value
})



const trackPlay3=document.getElementById('playpause-track3');
const trackRepeat3=document.getElementById('repeat-track3');
const track3=document.getElementById('track3');
const trackSeek3=document.getElementById('seek-slider3');
const trackCurrent3=document.getElementById('current_duration3');
const trackTotal3=document.getElementById('total_duration3');
const trackPlayBtn3=document.getElementById('trackplaybtn3');

trackPlay3.addEventListener("click",()=>{
    trackPlayBtn3.classList.toggle("fa-circle-pause")
    if(trackPlayBtn3.classList.contains("fa-circle-pause")){
       track3.play()
    }
    else{
       track3.pause()
    }
})

trackRepeat3.addEventListener("click",()=>{
    track3.currentTime=0;
    track3.pause()
    trackPlayBtn3.classList.remove("fa-circle-pause")
})

const setMusic3 =(i) =>{
    setTimeout(()=>{
        trackSeek3.max=track3.duration;
        trackTotal3.innerHTML=formatTime(track3.duration);
    },300);
}

setMusic3(0)

setInterval(()=>{
    trackSeek3.value=track3.currentTime;
    trackCurrent3.innerHTML=formatTime(track3.currentTime);
},500)

trackSeek3.addEventListener('change',()=>{
    track3.currentTime=trackSeek3.value
})


const trackPlay4=document.getElementById('playpause-track4');
const trackRepeat4=document.getElementById('repeat-track4');
const track4=document.getElementById('track4');
const trackSeek4=document.getElementById('seek-slider4');
const trackCurrent4=document.getElementById('current_duration4');
const trackTotal4=document.getElementById('total_duration4');
const trackPlayBtn4=document.getElementById('trackplaybtn4');

trackPlay4.addEventListener("click",()=>{
    trackPlayBtn4.classList.toggle("fa-circle-pause")
    if(trackPlayBtn4.classList.contains("fa-circle-pause")){
       track4.play()
    }
    else{
       track4.pause()
    }
})

trackRepeat4.addEventListener("click",()=>{
    track4.currentTime=0;
    track4.pause()
    trackPlayBtn4.classList.remove("fa-circle-pause")
})

const setMusic4 =(i) =>{
    setTimeout(()=>{
        trackSeek4.max=track4.duration;
        trackTotal4.innerHTML=formatTime(track4.duration);
    },300);
}

setMusic4(0)

setInterval(()=>{
    trackSeek4.value=track4.currentTime;
    trackCurrent4.innerHTML=formatTime(track4.currentTime);
},500)

trackSeek4.addEventListener('change',()=>{
    track4.currentTime=trackSeek4.value
})


