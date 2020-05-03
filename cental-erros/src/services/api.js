import axios from 'axios'

const api = axios.create({
    baseURL:'https://central-erros-itau.herokuapp.com/api/v1/'
    //baseURL: 'http://localhost:5002/api/v1/'
})

export default api;