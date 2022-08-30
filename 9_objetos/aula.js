const aumentarAno = obj => obj.ano += 1

const carro = {
    marca: "ford",
    modelo: "focus", 
    ano: 2019, 
    placa: "HXH-2011", 
    buzina: () => console.log("biiiiiii "),
    idcompleto: function() {
        return console.log(`O seu ${this.marca} ${this.modelo} é do ano ${this.ano} e tem a placa ${this.placa}`)
    }
}
console.log(carro.marca) // mostra o conteúdo dentro de marca

console.log(`O seu ${carro.marca} ${carro.modelo} é do ano ${carro.ano} e tem a placa ${carro.placa}`)

if (carro.ano >= 2019) {
    console.log("carro novo")
}
aumentarAno(carro)
console.log(carro.ano)
carro.buzina()
carro.idcompleto()
