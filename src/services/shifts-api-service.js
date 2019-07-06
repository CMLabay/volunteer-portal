import TokenService from '../services/token-service'
import config from '../config'

const ShiftApiService = {
    getShifts(race_id, user_id){
        let queryString
        if(race_id){
            queryString = `race_id=${race_id}`
        }
        if(user_id){
            if(!queryString){
                queryString = `user_id=${user_id}`
            } else {
                queryString = `&user_id=${user_id}`
            }
        }
        return fetch(`${config.API_ENDPOINT}/shifts?${queryString}`, {
            headers:{
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    updateShift(user_id, shift_id){
        return fetch(`${config.API_ENDPOINT}/shifts/${shift_id}`, {
            method: 'PATCH',
            headers:{
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                user_id: user_id
            }),
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )

    },
    postShift(shift_name, shift_day, shift_date, shift_time, shift_race_id){
        return fetch(`${config.API_ENDPOINT}/shifts`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'Authorization':`bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                name: shift_name,
                day: shift_day,
                date: shift_date,
                time: shift_time,
                race_id: shift_race_id
            }),
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }

}

export default ShiftApiService