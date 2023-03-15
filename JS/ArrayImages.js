
// Program for array images in BgImage.html
// var arr = ["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg"]
var arr = ["sun.jpg","moon.jpg","jupiter.jpg","earth.jpg","mars.jpg","saturn.jpg"];
var a = 0
function inc(){
    if (a == arr.length-1){
        a = 0;
    }
    var img = arr[a];
    document.getElementById("header").style.backgroundImage="url(../Photos/Planets/"+img+")"
    a++;

}
function dec(){
    if (a == 0){
        a = arr.length-1
    }
    document.getElementById("header").style.backgroundImage="url(../Photos/"+arr[a]+")"
    a--;
}
function showSlides(){
    document.getElementById("header").removeAttribute("style")
    document.getElementById("gallery").setAttribute("style","display:none;")
}