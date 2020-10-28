const ICrud = require('../strategies/interfaces/interfaceCrud')
const Sequelize = require('sequelize')

class Postgres extends ICrud {
    constructor() {
        super();
        this._driver = null
        this._carros = null
    }
    async create(item) {
        const {dataValues} = await this._carros.create(item)
        return dataValues
    }
    async update(id, item) {
        return await this._carros.update(item, {where: {id : id}})
    }
    async delete(id) {
        const query = id ? { id } : {}
        return await this._carros.destroy({ where: query })
    }
    async read(modelo = {}) {
        return await this._carros.findAll({where: modelo, raw: true})
    }
    async connect() {
        this._driver = new Sequelize(
            'carros',
            'higor',
            'higor',
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false
            }
        )
        await this.defineModel()
    }
    async isConnected() {
        try {
            await this._driver.authenticate()
            return true
        } catch (error) {
            console.log(error)
        }
    }
    async defineModel() {
        this._carros = this._driver.define('carros', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            modelo: {
                type: Sequelize.STRING,
                required: true,
            },
            ano: {
                type: Sequelize.INTEGER,
                required: true
            }
    
        },{
            tableName: 'TB_CARROS',
            freezeTableName: false,
            timestamps: false
        })
    
        await this._carros.sync()
    }
}
module.exports = Postgres
