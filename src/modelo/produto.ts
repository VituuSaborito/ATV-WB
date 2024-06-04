export default class Produto {
    public codigo!: number 
    public nome!: string
    public preco!: number
    constructor(codigo:number, nome: string, preco: number){
        this.codigo = codigo
        this.nome = nome
        this.preco = preco
    }
}