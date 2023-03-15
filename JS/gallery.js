var arr = ["sun.jpg","moon.jpg","jupiter.jpg","earth.jpg","mars.jpg","saturn.jpg"];
var images = document.getElementsByClassName("a")


for (i=0; i<images.length; i++){
    var img = arr[i]
    images[i].setAttribute("src","../Photos/Planets/"+img)
}

function openImage(pic,desc){
    document.getElementById("subwindow").removeAttribute("style")
    document.getElementById("windowImage").src='../Photos/Planets/'+pic+".jpg"
    document.getElementById("head").innerHTML=pic
    document.getElementById("desc").innerHTML=desc
}
function closeImage(){
    document.getElementById("subwindow").setAttribute("style","display:none")
}

function openGallery(){
    document.getElementById("gallery").removeAttribute("style")
    document.getElementById("gallery").style.backgroundColor="gray"
    document.getElementById("header").setAttribute("style","display:none;")
}