var numtxt = document.getElementById("numtxt")
var nums = []
var res = document.querySelector("div#result")
// funções de tratamento de erros
function inLista(n) {
    if (nums.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}
function isValido(n) {
    if (n > 999 || n < -999) {
        return true
    } else {
        return false
    }
}

// funções secundárias
function maiornum() {
    let contador = 0
    for (c = 0; c <= nums.length; c++) {
        if (c == 0) {
            contador = nums[c]
        } else {
            if (nums[c] > contador) {
                contador = nums[c]
            }
        }
    }
    return contador
}
function menornum(n) {
    let contador = 0
    for (c = 0; c <= nums.length; c++) {
        if  (c == 0) {
            contador = nums[c]
        } else {
            if (nums[c] < contador) {
                contador = nums[c]
            }
        }
    } 
    return contador
}
function somavetor() {
    let total = 0
    let contador = 0
    for (c in nums) {
        contador = nums[c]
        total += contador
    }
    return total
}
function mediavetor() {
    let contador = 0
    let total = 0
    for (c in nums) {
        contador = nums[c]
        total += contador
    }
    let media = (total / nums.length).toFixed(1)
    return media
}


// funções principais
function adicionar() {
    // if == testando possíveis erros / else == adiciondo número ao array
    if (inLista(Number(numtxt.value)) || isValido(Number(numtxt.value))) {
        alert("{ERRO} O número adicionado já está na lista ou excede o tamanho máximo/mínimo de caracteres!")
    } else {
        nums.push(Number(numtxt.value))
    }
    // Liberando a opção de finalizar
    if (nums.length > 1) {
        var finalizar = document.getElementById("finalizar")
        finalizar.style.display = "block"
    }
}
function finalizar() {
    if (nums.length == 0) {
        alert("{ERRO} Adicione um número a lista!")
    } else {
        res.innerHTML = `O tamanho do vetor é de ${nums.length} números<br>`
        res.innerHTML += `O maior número adicionado foi: ${maiornum(nums)}<br>`
        res.innerHTML += `O menor número adicionado foi: ${menornum(nums)}<br>`
        res.innerHTML += `Somando todos os valores, teremos: ${somavetor(nums)}<br> `
        res.innerHTML += `A média dos valores adicionados é: ${mediavetor(nums)} `
    }
}