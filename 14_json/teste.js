const obj = {
    nome: "leonardo",
        idade: 18,
        trabalhando: true,
        detalhes_profissão: {
            profissão: "programador",
            empresa: "empresa s"
        },
        hobbies: ["programar", "Jogar", "Guitarra"]
}
// converter objeto para json
const jsonData = JSON.stringify(obj)
console.log(jsonData)

// converter json para objeto
const objData = JSON.parse(jsonData)
console.log(objData)