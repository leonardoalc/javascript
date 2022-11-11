function qualTamanho()  {
    const screen = document.getElementById("screensize")
    let width = window.innerWidth
    let height = window.innerHeight
    screen.innerHTML = `${width} x ${height}`
}

setInterval(qualTamanho, 500)