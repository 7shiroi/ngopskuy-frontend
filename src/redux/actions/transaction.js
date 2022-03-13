import http from "../../helpers/http"

export const getUserTransaction = (token) => {
    return{
        type: 'GET_TRANSACTION',
        payload: http(token).get('/transaction/user/')
    }
}

// export const deleteHistory = (id) => {
//     let url = `${REACT_APP_BACKEND_URL}/transaction/delete/${id}`
//     return{
//         type: 'DELETE_HISTORY',
//         payload: axios.patch(url)
//     }
// }

export const editTransaction = (data, token) => {
    return {
        type: 'EDIT_TRANSACTION',
        payload: http(token).patch(`/transaction/${data.id}`)
    }
}