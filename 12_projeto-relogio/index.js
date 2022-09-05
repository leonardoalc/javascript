function relogio() {
// variaveis que pegam o horário    
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

// variaveis para colocar os horários nas divs
    let horad = document.getElementById("hora")
    let mind = document.getElementById("min")
    let secd = document.getElementById("secs")

// atualizando o horário
    horad.innerHTML = hora
    mind.innerHTML = min
    secd.innerHTML = sec
    

}
setInterval(relogio, 500)