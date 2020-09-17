const service = require('./serviceTest')

async function main(){
    try {
        const result = await service.obterUsuarios()
        const lista = [];
        
        console.time('timeFor')
        for(let i=0;i<result.length-1;i++){
            const usuario = result[i].title
            lista.push(usuario)
        }
        console.timeEnd('timeFor')

        console.time('timeForIn')
        for(let i in result){
            const usuario = result[i].title
            lista.push(usuario)
        }
        console.timeEnd('timeForIn')

        console.time('timeForOf')
        for(usuario of result){
            lista.push(usuario.title)
        }
        console.timeEnd('timeForOf')
        
        console.log('lista', lista)

    } catch (error) {
        console.error(`erro interno`, error)
    }
}

main()