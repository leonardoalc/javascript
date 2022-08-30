// classe de celular
class Celular {
    constructor(marca, ssd, ram, camerabackpx, camerafrontpx) {
        this.marca = marca
        this.ssd = ssd
        this.ram = ram
        this.camback = camerabackpx
        this.camfront = camerafrontpx
    }
}

// var
let marca_select = document.getElementById("marca")
let ssd_select = document.getElementById("ssd")
let ram_select = document.getElementById("ram") 
let camback_select = document.getElementById("back")
let camfront_select = document.getElementById("front")

// programa
function celular() {
    let marca = marca_select.value
    let ssd = ssd_select.value
    let ram = ram_select.value
    let camback = camback_select.value
    let camfront = camfront_select.value
    let res = document.getElementById("result")

    const telemovel = new Celular(marca, ssd, ram, camback, camfront)
    res.innerHTML = `Seu celular de será um <strong>${telemovel.marca}</strong> com <strong>${telemovel.ssd}</strong> de armazenamento e <strong>${telemovel.ram}</strong> de ram! Contando com uma câmera traseira de <strong>${telemovel.camback}</strong> e uma frontal de <strong>${telemovel.camfront}</strong>!`

}
