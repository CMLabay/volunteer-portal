import TokenService from '../services/token-service'
import config from '../config'

const ShiftApiService = {
    getShifts(){
        return fetch(`${config.API_ENDPOINT}/shifts`, {
            headers: {

            },
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