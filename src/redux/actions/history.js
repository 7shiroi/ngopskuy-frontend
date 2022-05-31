import { default as axios } from "axios"
import http from "../../helpers/http"

const { REACT_APP_BACKEND_URL } = process.env

export const getHistory = (token) => {
    // let url = `${REACT_APP_BACKEND_URL}/transaction/user/1`
    return {
        type: 'GET_HISTORY',
        payload: http(token).get('/customer-history')
    }
}
export const getHistoryAdmin = (token) => {
    // let url = `${REACT_APP_BACKEND_URL}/transaction/user/1`
    return {
        type: 'GET_HISTORY',
        payload: http(token).get('/transaction?limit=9')
    }
}
export const getHistoryNext = (url, token) => {
    // let url = `${REACT_APP_BACKEND_URL}/transaction/user/1`
    return {
        type: 'GET_HISTORY',
        payload: http(token).get('/transaction?limit=9')
    }
}
export const deleteHistory = (id, token) => {
    return {
        type: 'DELETE_HISTORY',
        payload: http(token).patch(`/customer-history/delete/${id}`)
    }
}