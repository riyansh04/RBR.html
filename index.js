document.querySelector(".sound1").addEventListener("click",function(){
    var audio=new Audio('./sounds/gz.mp3');
    audio.play();
    animate1();
    
})
document.querySelector(".sound2").addEventListener("click",function(){
    var audio=new Audio('./sounds/drag.mp3');
    audio.play();
    animate2();
    
})
document.querySelector(".sound3").addEventListener("click",function(){
    var audio=new Audio('./sounds/klaus.mp3');
    audio.play();
    animate3();
    
})
function animate1(){
    var yo=document.querySelectorAll("img")[0];
    yo.classList.add("anime");
    setTimeout(function(){
        yo.classList.remove("anime");
    },200);
}
function animate2(){
    var yo=document.querySelectorAll("img")[1];
    yo.classList.add("anime");
    setTimeout(function(){
        yo.classList.remove("anime");
    },200);
}
function animate3(){
    var yo=document.querySelectorAll("img")[2];
    yo.classList.add("anime");
    setTimeout(function(){
        yo.classList.remove("anime");
    },200);
}


