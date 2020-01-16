var locKey;
placed =  (place) => {
    localStorage.setItem('lockey', place);
    locKey = localStorage.getItem('lockey');
    console.log(locKey);
}



if (localStorage.getItem('lockey') != null){
window.addEventListener("load", () =>{
    var placeId, collectionsID, longText, locationImg;
    var placeNum = parseInt(localStorage.getItem('lockey'));

        
        switch (placeNum) {
            case 0: placeId = "Kuala Lumpur"; 
                    collectionsID ="9381833";
                    locationImg ="https://source.unsplash.com/oc4kVkjQJmI/720x480";
                    longText = "Kuala Lumpur is the capital city of Malaysia, boasting gleaming skyscrapers, colonial architecture, charming locals, and a myriad of natural attractions. Divided into numerous districts, its main hub is called the Golden Triangle which comprises Bukit Bintang, KLCC and Chinatown.";
                    break;
            case 1: placeId = "Penang"; 
                    collectionsID ="9382083";
                    locationImg ="https://source.unsplash.com/_VI5TIoEvoE/720x480";
                    longText = "";  
                    break;
            case 2: placeId = "Maldives"; 
                    collectionsID ="9382075"; 
                    locationImg ="https://source.unsplash.com/_p0OdENA13Y/720x480";
                    longText = ""; 
                    break;
            case 3: placeId = "Ha Long"; 
                    collectionsID ="9382101"; 
                    locationImg ="https://source.unsplash.com/K1YRblz-rD0/720x480";
                    longText = "";
                    break;
            case 4: placeId = "Singapore"; 
                    collectionsID ="9382095"; 
                    locationImg ="https://source.unsplash.com/fZdI1VtMzA8/720x480";
                    longText = "";
                    break;
            case 5: placeId = "Ipoh"; 
                    collectionsID ="9382110";
                    locationImg ="https://source.unsplash.com/Gm4hVeXsboA/720x480";
                    longText = "";
                    break;
            case 6: placeId = "Bangkok"; 
                    collectionsID ="9382114";
                    locationImg ="https://source.unsplash.com/EFZqH5wzIbY/720x480";
                    longText = "";}

        console.log(placeId);
    var appkey = "c4b9f2cc0e97bc149548566e9bb5f8e13624a99cf6e17dea2e86f1cb446d1206";
    var apifetch = `https://api.unsplash.com/collections/${collectionsID}/photos?client_id=c4b9f2cc0e97bc149548566e9bb5f8e13624a99cf6e17dea2e86f1cb446d1206`
    
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
        
           var x = document.getElementById("bigtext");
           x.textContent =placeId; 
           var  text = document.getElementById("longText");
           text.textContent = longText;
           var bigImage = document.getElementById("bigImage");
           bigImage.src = locationImg;

           

        }
 ) }

initCounter = () =>{
    localStorage.getItem('lockey');
    localStorage.removeItem('lockey');
    console.log(localStorage.getItem('lockey'));
}

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

