var agora = new Date()
var dia_mes = agora.getDay()
switch (dia_mes) {
    case 0:
        console.log("Hoje é domingo! Aproveite mais um pouco...")
        break
    case 1:
        console.log("Hoje é segunda... F")
        break
    case 2:
        console.log("Hoje é terça! Continue!!")
        break
    case 3:
        console.log("Hoje é quarta! Aguente mais um pouco...")
        break
    case 4:
        console.log("Hoje é quinta! Quase lá...")
        break
    case 5:
        console.log("Hoje é SEXTA!! Você chegou lá!!")
        break
    case 6:
        console.log("Hoje é sábado! Aproveite!")
        break
    default:
        console.log("ERRO!! Dia inválido!")
        break
    }