import config from '../config'
import TokenService from '../services/token-service'

const AuthApiService = {
    postLogin({ email, password }){
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },
    postUser(user){
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    updateUser(user, credits){
        return fetch(`${config.API_ENDPOINT}/users/${user}`, {
            method: 'PATCH',
            headers:{
                'content-type': 'application/json',
                'Authorization':`bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                credits: credits
            }),
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
}

export default AuthApiService