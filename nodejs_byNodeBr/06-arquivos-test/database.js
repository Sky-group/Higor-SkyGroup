const {
    writeFile,
    readFile
} = require('fs')

const {
    promisify
} = require('util')

const asyncWriteFile = promisify(writeFile)
const asyncReadFile = promisify(readFile)

class Database {
    
    constructor() {
        this.NOME_ARQUIVO = 'carros.json'
    }
    
    async escreverArquivo (dados) {
        await asyncWriteFile(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }

    async obterDadosArquivo () {
        const resultado = await asyncReadFile(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(resultado.toString())
    }

    async listarCarro (id) {
        const dados = await this.obterDadosArquivo()
        return dados.filter(item => (id ? (item.id === id) : true)) 
    }

    async cadastrarCarro (carro) {
        const dados = await this.obterDadosArquivo()

        const id = carro.id !== undefined ? carro.id : Date.now()

        const carroComId = {
            ...carro,
            id
        }

        const dadosFinal = [
            ...dados,
            carroComId
        ]

        return await this.escreverArquivo(dadosFinal)
    }

    async deletarCarro(id) {
        if(!id){
            return await this.escreverArquivo([])
        }

        const dados = await this.obterDadosArquivo()

        const indice = dados.findIndex(item => item.id == parseInt(id))

        if(indice === -1){
            throw Error('carro não encontrado!')
        }

        dados.splice(indice, 1)

        return await this.escreverArquivo(dados)
    }

    async atualizarCarro(dadosParaModificar, id) {
        const dados = await this.obterDadosArquivo();

        const indice = dados.findIndex(item => item.id === parseInt(id))

        if(indice === -1){
            throw Error('Carro não existe!')
        }

        const atual = dados[indice]

        const carroAtualizado = {
            ...atual,
            ...dadosParaModificar
        }

        dados.splice(indice, 1)

        return await this.escreverArquivo([
            ...dados,
            carroAtualizado
        ])

    }


}

module.exports = new Database();
