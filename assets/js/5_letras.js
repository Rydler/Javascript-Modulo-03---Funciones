const a = "pink"
const s = "orange"
const d = "skyblue"
const q = "purple"
const w = "green"
const e = "brown"

document.addEventListener("keydown", function(event){
    if (event.key === "a" || event.key === "A"){
        addColor(a);
    }
    else if (event.key === "s" || event.key === "S"){
        addColor(s);
    }
    else if (event.key === "d" || event.key === "D"){
        addColor(d);
    }
    else if (event.key === "q" || event.key === "Q"){
        addDiv(q);
    }
    else if (event.key === "w" || event.key === "W"){
        addDiv(w);
    }
    else if (event.key === "e" || event.key === "E"){
        addDiv(e);
    }
})

function addColor(color){

    contenedor = document.getElementById("key"); 
    contenedor.style.backgroundColor = color
}

function addDiv(color){
    contenedor = document.getElementById("contenedor"); 
    nuevoElemento = document.createElement("div");
    nuevoElemento.style.width = "200px"
    nuevoElemento.style.height = "200px"
    nuevoElemento.style.border = "black solid"
    nuevoElemento.style.backgroundColor = color
    contenedor.appendChild(nuevoElemento);
}