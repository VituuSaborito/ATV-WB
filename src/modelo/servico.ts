export default class Servico {
    public codigo!: number
    public tipo!: string
    public tempo!: string
    public preco!: number
    constructor(codigo: number, tipo: string, tempo: string, preco: number){
        this.tipo = tipo
        this.tempo = tempo
        this.preco = preco
        this.codigo = codigo
    }
}