const textarea = document.querySelector("#chatbox");

textarea.addEventListener("keydown",()=>{
    textarea.style.height = 0;
    textarea.style.height = textarea.scrollHeight + 'px';
},false)

textarea.addEventListener("keyup",()=>{
    textarea.style.height = 0;
    textarea.style.height = textarea.scrollHeight + 'px';
},false)