window.onload = function(){
    loadScreen();
}

function loadScreen(){
    load = document.querySelector(".loading");
    load.style.height = "100%";
    load.style.width = "100%";
    load.style.backgroundColor = "black";
    load.style.zIndex = "7";
}