let res = document.getElementById("res")
const carro = {
    marca: "ford",
    modelo: "focus", 
    ano: 2019, 
    placa: "HXH-2011",
}

function dadoMarca() {
    res.innerHTML = `A marca do carro é: ${carro.marca}`
    res.style.display = "block"
}
function dadoModelo() {
    res.innerHTML = `O modelo do carro é: ${carro.modelo}`
    res.style.display = "block"
}
function dadoAno() {
    res.innerHTML = `O ano do carro é: ${carro.ano}`
    res.style.display = "block"
}
function dadoPlaca() {
    res.innerHTML = `A placa do carro é: ${carro.placa}`
    res.style.display = "block"
}