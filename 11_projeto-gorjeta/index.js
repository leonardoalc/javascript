let slider = document.getElementById("slider")
let percent = document.getElementById("valuee")
let total = document.getElementById("valor")
let total_com = document.getElementById("tot_com")
let total_sem = document.getElementById("tot_sem")
let tip = 0
let tot_tip = 0
    // valores
    total.oninput = function() {
        if (this.value > 10000) {
            total.value = ""
            total_sem.innerHTML = ""
            total_com.innerHTML = ""
            alert("O valor máximo é de R$10.000")
        } else {
            let total_fix = Number(total.value)
            tip = total.value * slider.value / 100
            tot_tip = Number(this.value) + Number(tip)
            total_sem.innerHTML = `${total_fix.toFixed(2)}`
            total_com.innerHTML = `${tot_tip.toFixed(2)}`
        }
    }
    // Slider %
    percent.innerHTML = `${slider.value}%`
    slider.oninput = function() {
        if (total.value > 10000) {
            total.value = ""
            total_sem.innerHTML = ""
            total_com.innerHTML = ""
            alert("O valor máximo é de R$10.000")
        } else {
            let total_fix = Number(total.value)
            tip = total.value * this.value / 100
            tot_tip = Number(total.value) + Number(tip)
            percent.innerHTML = `${this.value}%`
            total_sem.innerHTML = `${total_fix.toFixed(2)}`
            total_com.innerHTML = `${tot_tip.toFixed(2)}`
        }
    }