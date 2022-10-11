var score_player_num = 0
var score_npc_num = 0
var podeJogar = true
function jogar(ppt) {
    liberarJogada()
    if (podeJogar) {
        const npc_jogada = Math.floor(Math.random() * 3)
        const score_player_txt = document.getElementById("player-score")
        const score_npc_txt = document.getElementById("npc-score")
        const result_txt = document.getElementById("result-txt")

        if (ppt == 0) {
            podeJogar = false
            if (npc_jogada == 2) {
                score_player_num += 1
                score_player_txt.innerHTML = score_player_num
                result_txt.innerHTML = "Venceu!"
            } else if (npc_jogada == 1) {
                score_npc_num += 1
                score_npc_txt.innerHTML = score_npc_num
                result_txt.innerHTML = "Perdeu!"
            } else {
                result_txt.innerHTML = "Empatou!"
            }
        } else if (ppt == 1) {
            podeJogar = false
            if (npc_jogada == 2) {
                score_npc_num += 1
                score_npc_txt.innerHTML = score_npc_num
                result_txt.innerHTML = "Perdeu!"
            } else if (npc_jogada == 0) {
                score_player_num += 1
                score_player_txt.innerHTML = score_player_num
                result_txt.innerHTML = "Venceu!"
            } else {
                result_txt.innerHTML = "Empatou!"
            }
        } else {
            podeJogar = false
            if (npc_jogada == 0) {
                score_npc_num += 1
                score_npc_txt.innerHTML = score_npc_num
                result_txt.innerHTML = "Perdeu!"
            } else if (npc_jogada == 1) {
                score_player_num += 1
                score_player_txt.innerHTML = score_player_num
                result_txt.innerHTML = "Venceu!"
            } else {
                result_txt.innerHTML = "Empatou!"
            }
        }
        animacao(ppt, npc_jogada)
    }
}
function liberarJogada() {
    setTimeout(() => podeJogar = true, 1000)
}
function animacao(player=null, npc=null) {
    /*animando player*/
    let icon = document.getElementById(`play${player}`)
    icon.style.animation = "movimentarPlayer"
    icon.style.animationDuration = "1s"

    let icon_npc = document.getElementById(`npc${npc}`)
    icon_npc.style.animation = "movimentarNpc"
    icon_npc.style.animationDuration = "1s"

    setTimeout(() => {
        icon.style.removeProperty("animation")
        icon.style.removeProperty("animation-duration")

        icon_npc.style.removeProperty("animation")
        icon_npc.style.removeProperty("animation-duration")
    }, 1000)
}