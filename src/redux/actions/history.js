import {default as axios} from "axios"
import http from "../../helpers/http"

const {REACT_APP_BACKEND_URL} = process.env

export const getHistory = (token) => {
    // let url = `${REACT_APP_BACKEND_URL}/transaction/user/1`
    return{
        type: 'GET_HISTORY',
        payload: http(token).get('/customer-history')
    }
}

export const deleteHistory = (id) => {
    let url = `${REACT_APP_BACKEND_URL}/transaction/delete/${id}`
    return{
        type: 'DELETE_HISTORY',
        payload: axios.patch(url)
    }
}