const element = document.getElementById("ele1") 

element.addEventListener("click", function(){
    pintar(element, "yellow")
})

function pintar(element, color){
    element.style.backgroundColor = color
}