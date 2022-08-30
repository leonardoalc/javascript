function tabuada() {
    let numtxt = window.document.getElementById("numtxt")
    let res = window.document.getElementById("result")
    let num = Number(numtxt.value)
    for (c = 1 ; c <= 10 ; c++) {
        if (c == 1) {
            res.innerHTML = `${num} x ${c} = ${Number(num*c)}<br>`
        } else {
            res.innerHTML += `${num} x ${c} = ${Number(num*c)}<br>`
        }
    }
}