const div1 = document.getElementById("id1") 
const div2 = document.getElementById("id2") 
const div3 = document.getElementById("id3") 
const div4 = document.getElementById("id4") 

div1.addEventListener("click", function(){
    pintar(div1)
})

div2.addEventListener("click", function(){
    pintar(div2)
})

div3.addEventListener("click", function(){
    pintar(div3)
})

div4.addEventListener("click", function(){
    pintar(div4)
})

function pintar(div){
    div.style.backgroundColor = "black"
}