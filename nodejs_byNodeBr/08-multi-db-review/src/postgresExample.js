const Sequelize = require('sequelize')

const driver = new Sequelize(
    'carros',
    'higor',
    'higor',
    {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false
    }
)

async function main() {

    const Carros = driver.define('carros', {
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

    await Carros.sync()

    await Carros.create({
        modelo: 'Cadilac',
        ano: 1967
    })

    const result = await Carros.findAll({ raw:true })
    console.log(result)
}

main()