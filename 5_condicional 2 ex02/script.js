function carregar() {
// Variáveis
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("foto")
var agora = new Date()
var hora = agora.getHours()

// colocando o textinho
msg.innerHTML = `São ${hora} horas agora!`

if (hora >= 6 && hora <= 12) {
    // DIA
    img.src = "imagens/dia.jpg"
    document.body.style.backgroundColor = "#22abc48a"
} else if (hora > 12 && hora <= 18) {
    // TARDE
    img.src =  "imagens/tarde.jpg"
    document.body.style.backgroundColor = "#b9846f"
} else {
    img.src = "imagens/noite.jpg"
    document.body.style.backgroundColor = "#242526"
}
}