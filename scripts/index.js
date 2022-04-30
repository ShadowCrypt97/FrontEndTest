const wrapper = document.querySelector(".swiper-wrapper");

async function setImages(cantidad){
    for(let i = 0; i<cantidad;i++){
        const cont = i + 1; 
        const container = document.querySelector("#slide"+cont);
        const image = document.createElement("img");
        const data = await getData("https://picsum.photos/v2/list");
        const random = getRandomInt(0,30);
        image.setAttribute("src",data[random].download_url);
        image.setAttribute("alt","slide "+cont);
        container.appendChild(image);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function countSlides(className){
    var divs = document.getElementsByClassName(className); 
    return divs.length; 
}

async function getData(jsonPath){
    const response = await fetch(jsonPath);
    const data = await response.json();
    return data;
}


const cantidad = countSlides("swiper-slide");
setImages(cantidad);
