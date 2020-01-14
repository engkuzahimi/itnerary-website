


const container = document.querySelector(".img-small");
const img =document.getElementsByClassName("img");
const btns = document.querySelector(".leftrightbtn");

changeImageLeft = () => {
    var  i = 0;
    var k = [];
    for (i=0; i<img.length; i++) {
        k[i] = img[i].src;
    }
    for (i=0; i<k.length; i++){
        var j = i-1;
        if (j == -1){
            j = 3;
        }
        img[j].src = k[i];
    } 
}

changeImageRight  = ()  => {
    var  i = 0;
    var k = [];
    for (i=0; i<img.length; i++) {
        k[i] = img[i].src;
    }
    for (i=0; i<k.length; i++){
        var j = i+1;
        if (j == 4){
            j = 0;
        }
        img[j].src = k[i];
    } 
}