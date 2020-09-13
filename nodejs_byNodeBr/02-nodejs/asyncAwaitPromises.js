/*
 0 - Obter um usuário
 1 - Obter o número do telefone de um usuário a partir do seu Id
 2 - Obter o endereço do usuário pelo Id
*/
// importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){
    return new Promise(function resolvePromisse(resolve, reject){
        setTimeout(function(){
            return resolve({
                id: 1,
                nome: 'Higor',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario){
    return new Promise(function resolverPromisse(resolve, reject){
        setTimeout(function(){
            return resolve({
            numero: '998488241',
            ddd: 48
            })
        }, 2000); 
    })
}

function obterEndereco(idUsuario, callback){
    setTimeout(()=>{
        return callback(null, {
        rua:'Vereador Clésio Brighente',
        numero:100
        }, 2000)
    })
}

main()
async function main() {
    try {
        console.time('medida-promise')

        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const telefone = resultado[0]
        const endereco = resultado[1]

        console.log(`
             Nome: ${usuario.nome}
             Telefone: (${telefone.ddd}) ${telefone.numero}
             Endereço: ${endereco.rua}, ${endereco.numero}
         `)

         console.timeEnd('medida-promise')

    } catch (error) {
        console.error('DEU RUIM', error)
    }

}

// const usuarioPromisse = obterUsuario()

// usuarioPromisse
//     .then(function (usuario){
//         return obterTelefone(usuario.id)
//         .then(function resolverTelefone(result) {
//             return {
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id
//                 },
//                 telefone: result
//             }
//         })
//     })
//     .then(function (usuarioTelefone) {
//         const endereco = obterEnderecoAsync(usuarioTelefone.usuario.id)
//         return endereco.then(function resolverEndereco(result) {
//             return {
//                 usuario: usuarioTelefone.usuario,
//                 telefone: usuarioTelefone.telefone,
//                 endereco: result
//             }
//         })
//     })
//     .then(function (usuarioTelefoneEndereco) {
//         console.log(`
//             Nome: ${usuarioTelefoneEndereco.usuario.nome}
//             Endereço: ${usuarioTelefoneEndereco.endereco.rua}, ${usuarioTelefoneEndereco.endereco.numero}
//             Telefone: (${usuarioTelefoneEndereco.telefone.ddd}) ${usuarioTelefoneEndereco.telefone.numero}
//         `);
//     })
//     .catch(function (error) {
//         console.log('DEU RUIM', error)
//     })

// obterUsuario(function resolverUsuario(error, usuario){
//     if (error){
//         console.log('DEU RUIM em USUARIO', error)
//         return;
//     }
  
//     obterTelefone(usuario.id, function (error1, telefone){
//         if (error1){
//             console.log('DEU RUIM em TELEFONE', error)
//             return;
//         }

//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//             if (error2){
//                 console.log('DEU RUIM em ENDERECO', error)
//                 return;
//             }
        
//             console.log(`
//             Nome: ${usuario.nome},
//             Endereco: ${endereco.rua}, ${endereco.numero}
//             Telefone: (${telefone.ddd})${telefone.telefone}
//             `)
//         })

//     })
  

// });