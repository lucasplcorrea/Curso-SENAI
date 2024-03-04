export class Tamagotchi {
    constructor(nome) {
        this.nome = nome
        this.energia = 100
        this.saciedade = 100
        this.felicidade = 100
        this.hidratacao = 100
    }

    alterarNome(novo_nome) {
        this.nome = novo_nome
        return 'Nome alterado'
    }

    comer() {
        this.saciedade += 10
        console.log(`${this.nome} está comendo. Saciedade: ${this.saciedade}`)
        return `${this.nome} está comendo. Saciedade: ${this.saciedade}`
    }

    dormir() {
        this.energia += 10
        console.log(`${this.nome} está dormindo. Energia: ${this.energia}`)
        return `${this.nome} está dormindo. Energia: ${this.energia}`
    }

    brincar() {
        this.felicidade += 10
        this.energia -= 10
        console.log(`${this.nome} está brincando. Felicidade: 
                        ${this.felicidade} | Energia: ${this.energia}`)

        return `${this.nome} está brincando. Felicidade: ${this.felicidade} | Energia: ${this.energia}`
    }

    beber() {
        this.hidratacao += 10
        console.log(`${this.nome} está bebendo. Hidratação: ${this.hidratacao}`)

        return `${this.nome} está bebendo. Hidratação: ${this.hidratacao}`
    }
}