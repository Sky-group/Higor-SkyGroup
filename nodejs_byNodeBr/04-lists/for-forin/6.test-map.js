const {obterUsuarios} = require('./serviceTest')

Array.prototype.meuMapa = (callback) => {
    const arrayLista = []
    for(let i=0;i<this.lenght-1;i++){
        const resultado = callback(this[i], i)
        arrayLista.push(resultado)
    }
    return arrayLista
}

async function main() {
    try{

        const result = await obterUsuarios()
        const lista = []

        console.time('forEach')
        result.forEach((item) => {
            lista.push(item.title)
        })
        console.timeEnd('forEach')

        console.time('map')
        const listaUsuario = result.map((usuario) => {
            return usuario.title
        })
        console.timeEnd('map')

        console.time('meuMapa')
        const titulos = result.map((titulo, indice) => {
            return `${indice} - ${titulo.title}`
        })
        console.timeEnd('meuMapa')

        console.log('lista', titulos)

    }catch (error) {
        console.error('erro', error)
    }

}

main()