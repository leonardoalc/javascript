let ordem = []
let playerOrdem = []
let flash
let turn
let acerto
let compTurn
let intervalId
let strict = false
let som = true
let power = false
let win

const turnCounter = document.getElementById("turn")
const topLeft = document.getElementById("top-left")
const topRight = document.getElementById("top-right")
const bottomLeft = document.getElementById("bottom-left")
const bottomRight = document.getElementById("bottom-right")
const strictButton = document.getElementById("strict")
const powerButton = document.getElementById("power")
const startButton = document.getElementById("start")

strictButton.addEventListener("click", () => {
    if (strictButton.checked == true) {
        strict = true
    } else {
        strict = false
    }
})

powerButton.addEventListener('click', () => {
    if (powerButton.checked == true) {
      power = true;
      turnCounter.innerHTML = "-";
    } else {
      power = false;
      turnCounter.innerHTML = "";
      clearColor();
      clearInterval(intervalId);
    }
});

startButton.addEventListener('click', () => {
    if (power || win) {
      play();
    }
});

function play() {
    win = false
    ordem = []
    playerOrdem = []
    flash = 0
    intervalId = 0
    turn = 1
    turnCounter.innerHTML = 1
    acerto = true

    for (var i = 0; i < 20; i++) {
        ordem.push(Math.floor(Math.random() * 4) + 1)
    }
    compTurn = true

    intervalId = setInterval(gameTurn, 800)
}

function gameTurn() {
    power = false
    if (flash == turn) {
        clearInterval(intervalId) 
        compTurn = false
        clearColor()
        power = true
    }

    if (compTurn) {
        clearColor()
        setTimeout(() => {
            if (ordem[flash] == 1) one()
            if (ordem[flash] == 2) two()
            if (ordem[flash] == 3) three()
            if (ordem[flash] == 4) four()
            flash++
        }, 200);
    }
}
function one() {
    if (som) {
        let audio = document.getElementById("clip1")
        audio.play()
    }
    som = true
    topLeft.style.backgroundColor = "lightgreen"
}
function two() {
    if (som) {
        let audio = document.getElementById("clip2")
        audio.play()
    }
    som = true
    topRight.style.backgroundColor = "tomato"
}
function three() {
    if (som) {
        let audio = document.getElementById("clip3")
        audio.play()
    }
    som = true
    bottomLeft.style.backgroundColor = "yellow"
}
function four() {
    if (som) {
        let audio = document.getElementById("clip4")
        audio.play()
    }
    som = true
    bottomRight.style.backgroundColor = "lightskyblue"
}
function clearColor() {
    topLeft.style.backgroundColor = "darkgreen"
    topRight.style.backgroundColor = "darkred"
    bottomLeft.style.backgroundColor = "darkgoldenrod"
    bottomRight.style.backgroundColor = "darkblue"
}
function flashColor() {
    topLeft.style.backgroundColor = "lightgreen"
    topRight.style.backgroundColor = "tomato"
    bottomLeft.style.backgroundColor = "yellow"
    bottomRight.style.backgroundColor = "lightskyblue"
}
topLeft.addEventListener("click", () => {
    if (power) {
        playerOrdem.push(1)
        check()
        one()
        if (!win) {
            setTimeout(() => {
                clearColor()
            }, 300);
        }
    }
})
topRight.addEventListener("click", () => {
    if (power) {
        playerOrdem.push(2)
        check()
        two()
        if (!win) {
            setTimeout(() => {
                clearColor()
            }, 300);
        }
    }
})
bottomLeft.addEventListener("click", () => {
    if (power) {
        playerOrdem.push(3)
        check()
        three()
        if (!win) {
            setTimeout(() => {
                clearColor()
            }, 300);
        }
    }
})
bottomRight.addEventListener("click", () => {
    if (power) {
        playerOrdem.push(4)
        check()
        four()
        if (!win) {
            setTimeout(() => {
                clearColor()
            }, 300);
        }
    }
}) 
function check() {
    if (playerOrdem[playerOrdem.length - 1] != ordem[playerOrdem.length - 1]) {
        acerto = false
    }
    if (playerOrdem.length == 10 && acerto) {
        winGame()
    }

    if (acerto == false) {
        flashColor()
        turnCounter.innerHTML = "NÃO!"
        setTimeout(() => {
            turnCounter.innerHTML = turn
            clearColor()

            if (strict) {
                play()
            } else {
                compTurn = true 
                flash = 0
                playerOrdem = []
                acerto = true
                intervalId = setInterval(gameTurn, 800)
            }
        }, 800);
        som = false
    }

    if (turn == playerOrdem.length && acerto && !win) {
        turn++
        playerOrdem = []
        compTurn = true
        flash = 0
        turnCounter.innerHTML = turn
        intervalId = setInterval(gameTurn, 800)
    }
}

function winGame() {
    flashColor()
    turnCounter.innerHTML == "GG!!"
    power = false
    win = true
}