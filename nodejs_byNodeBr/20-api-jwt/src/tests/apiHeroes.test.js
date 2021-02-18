const assert = require('assert')
const api = require('./../api')
let app = {}
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ilh1eGFkYXNpbHZhIiwiaWQiOjEsImlhdCI6MTYxMzY3OTE5OX0.7ApkK4tu70sOe2jHTXULBet11hY611Ps7J6HVYvPya0'
const headers = {
    authorization: TOKEN
}

const MOCK_HEROI_CADASTRAR = {
    nome: 'Chapolin Colorado',
    poder: 'Marreta Bionica'
}

const MOCK_HEROI_INICIAL = {
    nome: 'Gavião Negro',
    poder: 'Mira Bionica'
}

let MOCK_ID = ''

describe('Suite de testes da API Heroes', function () {
    this.beforeAll(async () => {
        app = await api
        const result = await app.inject({
            method: 'POST',
            url: '/herois',
            headers,
            payload: JSON.stringify(MOCK_HEROI_INICIAL)
        })
        const dados = JSON.parse(result.payload)
        MOCK_ID = dados._id
    })
    
    it('listar /herois', async () => {
        const result = await app.inject({
            method: 'GET',
            headers,
            url: `/herois?skip=0&limit=10`
        })

        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode
        assert.deepStrictEqual(statusCode, 200)
        assert.ok(Array.isArray(dados))
    })

    it('listar /herois - limit 10', async () => {
        const TAMANHO_LIMITE = 3
        const result = await app.inject({
            method: 'GET',
            headers,
            url: `/herois?skip=0&limit=${TAMANHO_LIMITE}`
        })

        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode
        assert.deepStrictEqual(statusCode, 200)
        assert.ok(dados.length === TAMANHO_LIMITE)
    })

    it('listar /herois - erro limit incorreto', async () => {
        const TAMANHO_LIMITE = 'AEEE'
        const result = await app.inject({
            method: 'GET',
            headers,
            url: `/herois?skip=0&limit=${TAMANHO_LIMITE}`
        })
        const errorResult = {
            "statusCode":400,
            "error":"Bad Request",
            "message":"child \"limit\" fails because [\"limit\" must be a number]",
            "validation":{"source":"query","keys":["limit"]}
        }
        assert.deepStrictEqual(result.statusCode, 400)
        assert.deepStrictEqual(result.payload, JSON.stringify(errorResult))
    })

    it('listar /herois - deve filtrar um item', async () => {
        const NAME = MOCK_HEROI_INICIAL.nome
        const result = await app.inject({
            method: 'GET',
            headers,
            url: `/herois?skip=0&limit=1000&nome=${NAME}`
        })
        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode
        assert.deepStrictEqual(statusCode, 200)
        assert.ok(dados[0].nome === NAME)
    })

    it('cadastrar POST - /herois', async() => {
        const result = await app.inject({
            method: 'POST',
            headers,
            url: `/herois`,
            payload: JSON.stringify(MOCK_HEROI_CADASTRAR)
        })

        const statusCode = result.statusCode
        const { 
            message,
            _id
         } = JSON.parse(result.payload)
        assert.ok(statusCode === 200)
        assert.notDeepStrictEqual(_id, undefined)
        assert.deepStrictEqual(message, "Heroi cadastrado com sucesso!")
    })
    
    it('atualizar PATCH - /heroi/:id', async () => {
        const _id = MOCK_ID
        const expected = {
            poder: 'Super Mira'
        }
        const result = await app.inject({
            method: 'PATCH',
            headers,
            url: `/herois/${_id}`,
            payload: JSON.stringify(expected)
        })

        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)

        assert.ok(statusCode === 200)
        assert.deepStrictEqual(dados.message, 'Heroi atualizado com sucesso!')
    })

    it('atualizar PATCH - /heroi/:id - nao deve atualizar com id incorreto', async () => {
        const _id = `601c3da6330a09beea3e096f`
        const expected = {
            poder: 'Super Mira'
        }
        const result = await app.inject({
            method: 'PATCH',
            headers,
            url: `/herois/${_id}`,
            payload: JSON.stringify(expected)
        })

        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)

        assert.ok(statusCode === 200)
        assert.deepStrictEqual(dados.message, 'Não foi possível atualizar!')
    })
    
    it('remover DELETE - /herois/:id', async () => {
        const _id = MOCK_ID
        const result = await app.inject({
            method: 'DELETE',
            headers,
            url: `/herois/${_id}`
        })
        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)

        assert.ok(statusCode === 200)
        assert.deepStrictEqual(dados.message, 'Heroi removido com sucesso!')
    })
})