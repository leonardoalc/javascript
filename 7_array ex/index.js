let tarefas = document.getElementById("tarefas")
let texto_item = document.getElementById("item")
let cont = 0
let lista = []
function adicionar() {
    if (texto_item.value == "" || texto_item.value == null || texto_item.value == undefined || lista.indexOf(texto_item.value) != -1) {
        alert("[ERRO] Sua tarefa não é válida ou já foi adicionada!")
    } else {
        lista.push(texto_item.value)
        tarefas.innerHTML += `<div class="item-normal" id="${cont}">
        <div class="item-icone" id="item-icone-${cont}" onclick="marcar(${cont})"><i class="mdi mdi-circle-outline" id="icone-${cont}"></i></div>
        <div class="item-nome" onclick="marcar(${cont})">${texto_item.value}</div>
        <div class="item-botao" onclick="deletar(${cont})"><i class="mdi mdi-delete">deletar</i></div>
    </div>`
        cont++
    }
}

function marcar(id) {
    // alterando a tarefa
    let tarefa = document.getElementById(`${id}`)
    let classe = tarefa.getAttribute("class")
    let icone = document.getElementById(`icone-${id}`)
    if (classe == "item-normal") {
        tarefa.setAttribute("class", "item-clicado")
        icone.setAttribute("class", "mdi mdi-check-circle")
    } else if (classe == "item-clicado") {
        tarefa.setAttribute("class", "item-normal")
        icone.setAttribute("class", "mdi mdi-circle-outline")
    }
}
function deletar(id) {
    let deleta = document.getElementById(`${id}`)
    deleta.remove()
}