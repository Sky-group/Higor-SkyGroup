const assert = require('assert')
const MongoDb = require('./../db/strategies/mongodb')
const Context = require('./../db/strategies/base/contextStrategy')

const MOCK_HEROI_CADASTRAR = {
    nome: 'Mulher Maravilha',
    poder: 'Laço'
}
const MOCK_HEROI_DEFAULT = {
    nome: `Homem Aranha-${Date.now()}`,
    poder: 'Teia'
}
const MOCK_HEROI_ATUALIZAR = {
    nome: `Porco Aranha-${Date.now()}`,
    poder: 'Voar'
}
let MOCK_HEROI_ID = ''
const context = new Context(new MongoDb())
describe('MongoDb testes', function () {
    this.beforeAll(async function () {
        await context.connect()
        await context.create(MOCK_HEROI_DEFAULT)
        const result = await context.create(MOCK_HEROI_ATUALIZAR)
        MOCK_HEROI_ID = result._id
    })
    it('verificar conexao', async () => {
        const result = await context.isConnected()
        console.log('result', result)
        const expected = 'Conectado'

        assert.deepStrictEqual(result, expected)
    })
    it('cadastrar', async () => {
        const { nome, poder } = await context.create(MOCK_HEROI_CADASTRAR)
        assert.deepStrictEqual({ nome, poder }, MOCK_HEROI_CADASTRAR)
    })
    it('listar', async () => {
        const [{nome,poder}] = await context.read({ nome: MOCK_HEROI_DEFAULT.nome })
        const result = {
            nome, poder
        }
        assert.deepStrictEqual(result, MOCK_HEROI_DEFAULT)
    })
    it('atualizar', async () => {
        const result = await context.update(MOCK_HEROI_ID, {
            nome: 'Pernalonga'
        })
        assert.deepStrictEqual(result.nModified, 1)
    })
    it('remover', async () => {
        const result = await context.delete(MOCK_HEROI_ID)
        assert.deepStrictEqual(result.n, 1)
    })
})