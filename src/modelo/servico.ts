export default class Servico {
    public tipo!: string
    public tempo!: string
    public preco!: number
    constructor(tipo: string, tempo: string, preco: number){
        this.tipo = tipo
        this.tempo = tempo
        this.preco = preco
    }
}