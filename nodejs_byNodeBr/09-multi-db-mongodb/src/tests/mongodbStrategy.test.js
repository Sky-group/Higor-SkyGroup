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
const context = new Context(new MongoDb())
describe('MongoDb testes', function () {
    this.beforeAll(async function () {
        await context.connect()
        await context.create(MOCK_HEROI_DEFAULT)
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

})