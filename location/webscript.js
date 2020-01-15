
var imvg = [];

window.addEventListener("load", () =>{
    
    var appkey = "c4b9f2cc0e97bc149548566e9bb5f8e13624a99cf6e17dea2e86f1cb446d1206";
    var apifetch = `https://api.unsplash.com/collections/9381833/photos?client_id=c4b9f2cc0e97bc149548566e9bb5f8e13624a99cf6e17dea2e86f1cb446d1206`
    
    var i = document.getElementsByClassName("img");
    var urls, url2, url3, url4, url5;
    fetch(apifetch)
            .then(appres =>{
                return appres.json();
            })
            .then (appData => {
                console.log(appData);
                
                 urls = appData[0].urls.small;
                 url2 = appData[1].urls.small;
                 url3 = appData[2].urls.small;
                 url4 = appData[3].urls.small;
                 url5 = appData[4].urls.small;

                 i[0].src = urls;
                 i[1].src= url2;
                 i[2].src= url3;
                 i[3].src= url4;
                 i[4].src = url5;

            });
            
        })



const container = document.querySelector(".img-small");
const img =document.getElementsByClassName("img");
const btns = document.querySelector(".leftrightbtn");

changeImageLeft = () => {
    for  (var k=0; k<imvg.length; i++){
        console.log(imvg[k]);
    }
    
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