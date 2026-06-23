import axios from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:3000/api/auth',
    withCredentials : true
})

export async function register(name, contact, email, username, password){

    const res = await api.post('/register', {
        name,
        contact,
        email,
        username,
        password
    })

    return res.data

}

export async function login(username, password){


    const res = await api.post('/login',{
        username,
        password
    })

    return res.data
        
}

export async function getMe(){

    const res = await api.get('/get-me')
    return res.data

}