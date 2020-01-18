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
                    locationImg ="url(https://source.unsplash.com/oc4kVkjQJmI)50% no-repeat";
                    longText = "Kuala Lumpur is the capital city of Malaysia, boasting gleaming skyscrapers, colonial architecture, charming locals, and a myriad of natural attractions. Divided into numerous districts, its main hub is called the Golden Triangle which comprises Bukit Bintang, KLCC and Chinatown.";
                    break;
            case 1: placeId = "Penang"; 
                    collectionsID ="9382083";
                    locationImg ="url(https://source.unsplash.com/_VI5TIoEvoE)50% no-repeat";
                    longText = "Penang is a Malaysian state located on the northwest coast of Peninsular Malaysia, by the Malacca Strait. It has two parts: Penang Island, where the capital city, George Town, is located, and Seberang Perai (formerly Province Wellesley) on the Malay Peninsula.";  
                    break;
            case 2: placeId = "Maldives"; 
                    collectionsID ="9382075"; 
                    locationImg ="url(https://source.unsplash.com/_p0OdENA13Y)50% no-repeat";
                    longText = "Maldives, in full Republic of Maldives, also called Maldive Islands, independent island country in the north-central Indian Ocean. It consists of a chain of about 1,200 small coral islands and sandbanks (some 200 of which are inhabited), grouped in clusters, or atolls. "; 
                    break;
            case 3: placeId = "Ha Long"; 
                    collectionsID ="9382101"; 
                    locationImg ="url(https://source.unsplash.com/K1YRblz-rD0)50% no-repeat";
                    longText = "Halong Bay is a beautiful natural wonder in northern Vietnam near the Chinese border. The Bay is dotted with 1,600 limestone islands and islets and covers an area of over 1,500 sqkm. This extraordinary area was declared a UNESCO World Heritage Site in 1994.";
                    break;
            case 4: placeId = "Singapore"; 
                    collectionsID ="9382095"; 
                    locationImg ="url(https://source.unsplash.com/fZdI1VtMzA8)50% no-repeat";
                    longText = "Singapore, officially the Republic of Singapore, is a sovereign island city-state in Southeast Asia. The country is situated about one degree (137 kilometres or 85 miles) north of the equator, at the southern tip of the Malay Peninsula, with Indonesia's Riau Islands to the south and Peninsular Malaysia to the north.";
                    break;
            case 5: placeId = "Ipoh"; 
                    collectionsID ="9382110";
                    locationImg ="url(https://source.unsplash.com/Gm4hVeXsboA)50% no-repeat";
                    longText = "Ipoh (/ˈiːpoʊ/) is the capital city of the Malaysian state of Perak. Located by the Kinta River, it is nearly 180 km (110 mi) north of Kuala Lumpur and 123 km (76 mi) southeast of George Town in neighbouring Penang.";

                    break;
            case 6: placeId = "Bangkok"; 
                    collectionsID ="9382114";
                    locationImg ="url(https://source.unsplash.com/EFZqH5wzIbY)50% no-repeat";
                    longText = "Bangkok is the capital and most populous city of Thailand. It is known in Thai as Krung Thep Maha Nakhon or simply Krung Thep. The city occupies 1,568.7 square kilometres (605.7 sq mi) in the Chao Phraya River delta in central Thailand, and has a population of over eight million, or 12.6 percent of the country's population.";
                    break;
            case 7: placeId = "Jakarta"; 
                    collectionsID ="9382120";
                    locationImg ="https://source.unsplash.com/j9kwJlGRbPI)50% no-repeat";
                    longText = "Bangkok is the capital and most populous city of Thailand. It is known in Thai as Krung Thep Maha Nakhon or simply Krung Thep. The city occupies 1,568.7 square kilometres (605.7 sq mi) in the Chao Phraya River delta in central Thailand, and has a population of over eight million, or 12.6 percent of the country's population.";
                    break;
        }
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
           var bigImage = document.getElementById("bg-image");
           bigImage.style.background = locationImg;
           bigImage.style.backgroundSize ="cover";

           

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

