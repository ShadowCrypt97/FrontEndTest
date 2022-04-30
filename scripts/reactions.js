const heart = document.querySelector("#heart");
const heartpath= document.querySelector("#heart-path")

heart.addEventListener("click",evt =>{
    if(heartpath.getAttribute("fill") == "none"){
        heart.classList.add("heart-anim");
        heartpath.setAttribute("fill","#ED4956");
    }
    else{
        heartpath.setAttribute("fill","none");
        heart.classList.remove("heart-anim");
    }
    
})
