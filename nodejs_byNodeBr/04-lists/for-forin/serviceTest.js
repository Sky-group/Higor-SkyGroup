const axios = require('axios')
const URL = `https://jsonplaceholder.typicode.com/todos`

async function obterUsuarios() {
    const url = `${URL}/`
    const response = await axios.get(url)
    return response.data
}

module.exports = {
    obterUsuarios
} 