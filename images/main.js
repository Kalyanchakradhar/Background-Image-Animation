var slideImg = document.getElementById("slideImg");

var images = new Array(
    "images/222.jpg",
    "images/333.jpg",
    "images/444.jpg",
    "images/555.jpg",
);

var len = images.length;
var i = 0;

function slider() {
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',3000);
    
}