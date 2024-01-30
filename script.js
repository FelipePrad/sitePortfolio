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