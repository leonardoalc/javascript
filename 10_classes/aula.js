class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1; // sempre utilize o this para referenciar o objeto
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() {
        return `${this.modelo} buzinou: biiiiiiiii`
    }
}

const focus = new Carro("Fiat", "Uno", 2016)
const gol = new Carro("Volkswagen", "Gol", 2001)

console.log(gol.buzina())
console.log(focus.ano)
focus.ano = 2022
console.log(focus.ano)