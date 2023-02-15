let lis= document.querySelectorAll(".questions ul li")



lis.forEach(e=>{
    e.addEventListener("click",()=>{
        e.classList.toggle("active")
    })
})


let presentation = document.querySelector(".second .presentation")
let infos = document.querySelector(".second .infos")
let theRoof = document.querySelector("section .second")
let x = window.matchMedia("(max-width:770px)")


window.onscroll = function(){
    if(window.scrollY >= theRoof.offsetTop - 350 ){
        presentation.style.left ="0px";
        infos.style.right ="0px";
        console.log("heeeeeere")
    }
}

function normal(){
    if(x.matches){
        presentation.style.left ="0px";
        infos.style.right ="0px";
    }
}

normal()
x.addEventListener(normal())
/* */


