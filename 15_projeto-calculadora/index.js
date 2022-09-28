const operacaoAtual = document.querySelector("#operacao-atual")
const button = document.querySelectorAll("#botoes button")

function insert(num) {
    let operacao = (operacaoAtual.innerHTML).trim()
    let char_antes = operacao.slice(operacao.length - 1)
    console.log(char_antes)
    operacao += num
    console.log(isNaN(num))
    console.log(typeof(num))


    if (operacao.length >= 18) {
        return
    } else if ((char_antes == "+" || char_antes == "-" || char_antes == "/" || char_antes == "*") && isNaN(operacao[operacao.length - 1]) == true) {
        return
    } else if (operacao.length == 1 && isNaN(num) == true){
        return
    } else {
            operacaoAtual.innerHTML += num
            console.log(operacao.length)
    }
}
function fullClear() {
    operacaoAtual.innerHTML = ""
}
function back() {
    let operacao = operacaoAtual.innerHTML
    operacaoAtual.innerHTML = operacao.substring(0, operacao.length - 1)
}
function resolver() {
    let operacao = operacaoAtual.innerHTML
    if (operacao) {
        operacaoAtual.innerHTML = eval(operacao)
    }
}