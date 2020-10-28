const assert = require('assert')
const Postgres = require('./../db/strategies/postgres')
const Context = require('./../db/strategies/base/contextStrategy')

const context = new Context(new Postgres())

const MOCHA_CARRO_CADASTRAR = {
    modelo: 'Fusion',
    ano: '2019'
}
const MOCHA_CARRO_ALTERAR = {
    modelo: 'Civic',
    ano: '2018'
}

describe('Teste de carros', function() {
    
    this.beforeAll(async function () {
        await context.connect()
    })

    it('conectar', async function() {
        const result = await context.isConnected()
        assert.deepStrictEqual(result, true)
    })

    it('cadastrar', async function() {
        const result = await context.create(MOCHA_CARRO_CADASTRAR)
        delete result.id
        assert.deepStrictEqual(result, MOCHA_CARRO_CADASTRAR)        
    })

    it('read', async function() {
        const [result] = await context.read({ modelo: MOCHA_CARRO_CADASTRAR.modelo })
        delete result.id
        assert.deepStrictEqual(result, MOCHA_CARRO_CADASTRAR)
    })

    it('update', async function() {
        const [itemAtualizar] = await context.read({ modelo: MOCHA_CARRO_CADASTRAR.modelo })
        const [result] = await context.update(itemAtualizar.id, MOCHA_CARRO_ALTERAR)

        const [itemAtualizado] = await context.read({ modelo: MOCHA_CARRO_ALTERAR.modelo })
        delete itemAtualizado.id

        assert.deepStrictEqual(result, 1)
        assert.deepStrictEqual(MOCHA_CARRO_ALTERAR, itemAtualizado)
    })
    
    it('delete', async function() {
        const [item] = await context.read({})
        const result = await context.delete(item.id)
        assert.deepStrictEqual(result, 1)
    })
})