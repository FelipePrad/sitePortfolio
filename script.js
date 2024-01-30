function mostrarMais(){
    var maisTexto = document.getElementById("maisTexto")
    var saibaMais = document.getElementById("btn-saibamais")

    if(maisTexto.style.display === "none"){
        maisTexto.style.display = "block"
        saibaMais.innerHTML = "Mostrar Menos"
    } else {
        maisTexto.style.display = "none";
        saibaMais.innerHTML = "Saiba Mais";
    }

}

let btnMenu = document.getElementById("btn-abrir-menu")
let menu = document.getElementById("menu-mobile")
let overlay =document.getElementById("overlay-menu")

btnMenu.addEventListener('click' , () =>{
    menu.classList.add('abrirMenu')
})

menu.addEventListener('click' , () =>{
    menu.classList.remove("abrirMenu")
})

overlay.addEventListener('click' , () =>{
    menu.classList.remove("abrirMenu")
})