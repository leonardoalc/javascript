function calcular(){
    let ini = window.document.getElementById("starttxt")
    let fim = window.document.getElementById("endtxt")
    let passo = window.document.getElementById("passotxt")
    let cont = Number(ini.value)
    let res = window.document.getElementById("result")

    // Tratando possíveis erros com declarações...
    if (Number(ini.value) == NaN || Number(ini.value) == null) {
        window.alert("[ERRO] Valores inválidos...")
        return
    } else if (Number(fim.value) < Number(ini.value) || Number(fim.value) == NaN || Number(fim.value) == null) {
        window.alert("[ERRO] Valores inválidos...")
        return
    } else if (Number(passo.value) == 0) {
        window.alert("[ERRO] Passo 0, consideraremos passo 1")
        passo = 1
    }
    //
    while (cont <= Number(fim.value)) {
        if (cont == Number(ini.value)) {
            res.innerHTML = `${cont} &#x23ED; `
        } else {
            res.innerHTML += `${cont} &#x23ED; `
        }
        cont += Number(passo.value)
    }
    res.innerHTML += "FIM&#x1F3C1;"
}