const BaseRoute = require('./base/baseRouse')

class HeroRoutes extends BaseRoute {
    constructor(db){
        super()
        this.db = db
    }

    list() {
        return {
            path: '/herois',
            method: 'GET',
            handler: (request, headers) => {
                try {
                    const {
                        skip,
                        limit,
                        nome
                    } = request.query
                    let query = {}
                    if(nome){
                        query.nome = nome
                    }

                    if (isNaN(skip)) 
                        throw Error('Skip não é um numero')
                    if (isNaN(limit)) 
                        throw Error('Limit não é um numero')

                    return this.db.read(query, parseInt(skip), parseInt(limit))

                } catch (error) {
                    console.log('errou', error)
                    return "Erro interno no servidor"
                }
                
            }
        }
    }

}

module.exports = HeroRoutes