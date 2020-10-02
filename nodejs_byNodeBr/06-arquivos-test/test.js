const {
    ok,
    deepStrictEqual
} = require('assert')

const database = require('./database')

const CARRO_DEFAULT = {
    id: 1,
    placa: 'QAZ-321',
    ano: 1998,
    modelo: 'uno com escada'
}

const CARRO_ATUALIZAR_DEFAULT = {
    id: 2,
    placa: 'WER-456',
    ano: 1978,
    modelo: 'maverick'
}

describe('teste manipulação de carros', async () => {
    
    before(async () => {
        await database.cadastrarCarro(CARRO_DEFAULT)
        await database.cadastrarCarro(CARRO_ATUALIZAR_DEFAULT)
    })

    it('verificar listagem de carro', async() => {
        const [resultado] = await database.listarCarro(CARRO_DEFAULT.id)

        deepStrictEqual(resultado, CARRO_DEFAULT)
    })

    it('verificar cadastrado de carro', async() => {
        const esperado = CARRO_DEFAULT
        const resultado = await database.cadastrarCarro(CARRO_DEFAULT)

        const [atual] = await database.listarCarro(CARRO_DEFAULT.id)

        deepStrictEqual(atual, esperado)
    }) 

    it('verificar deleção de carro', async() => {
        const resultado = await database.deletarCarro(CARRO_DEFAULT.id)

        deepStrictEqual(resultado, true)
    })

    it('verificar atualizar de carro', async() =>{
        const esperado = {
            ...CARRO_ATUALIZAR_DEFAULT,
            modelo: 'opala',
            placa: 'ERT-789'
        }

        const novoCarro = {
            modelo: 'opala',
            placa: 'ERT-789'
        }

        await database.atualizarCarro(novoCarro, CARRO_ATUALIZAR_DEFAULT.id)

        const [resultado] = await database.listarCarro(CARRO_ATUALIZAR_DEFAULT.id)

        deepStrictEqual(resultado, esperado)
    })

})
