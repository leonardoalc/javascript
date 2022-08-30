function carregar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var img = window.document.getElementById("foto")
    var res = window.document.getElementById("result")
    // calculando idade
    if (Number(fano.value) >= ano || Number(fano.value) < 1922) {
        alert("[ERRO] Digite uma data válida!")
    } else {
        var idade = ano - Number(fano.value)
    }

    // definindo sexo e foto
    var sex = window.document.getElementsByClassName("genero")
    if (sex[0].checked) {
        res.innerHTML = `<p style="text-align: center;">Detectamos um homem de ${idade} anos!</p>`
        if (idade < 13) {
            img.style.display = "block"
            img.setAttribute("src", "imagens/crianca-m.jpg")
        } else if (idade > 13 && idade <= 20) {
            img.style.display = "block"
            img.setAttribute("src", "imagens/adolescente-m.jpg")
        } else if (idade > 20 && idade < 60) {
            img.style.display = "block"
            img.setAttribute("src", "imagens/adulto-m.jpg")
        } else if (idade >= 60) {
            img.style.display = "block"
            img.setAttribute("src", "imagens/idoso-m.jpg")
        }
    } else if (sex[1].checked) {
        res.innerHTML = `<p style="text-align: center;">Detectamos uma mulher de ${idade} anos!</p>`
        if (idade < 13) {
            img.style.display = "block"
            img.setAttribute("src", "imagens/crianca-f.jpg")
        } else if (idade > 13 && idade <= 20) {
            img.style.display = "block"
            img.setAttribute("src", "imagens/adolescente-f.jpg")
        } else if (idade > 20 && idade < 60) {
            img.style.display = "block"
            img.setAttribute("src", "imagens/adulto-f.jpg")
        } else if (idade >= 60) {
            img.style.display = "block"
            img.setAttribute("src", "imagens/idoso-f.jpg")
        }
    }
}