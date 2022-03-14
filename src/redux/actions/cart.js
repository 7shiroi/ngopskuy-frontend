import http from '../../helpers/http'

export const getCart = (token) => {
    // let url = `${REACT_APP_BACKEND_URL}/transaction/user/1`
    return{
        type: 'GET_USER_CART',
        payload: http(token).get('/customer-history/cart')
    }
}

export const checkoutCart = (data, token) => {
    const params = new URLSearchParams()
    params.append('id_transaction_status', data.status)
    return{
        type: 'CHECKOUT_USER_CART',
        payload: http(token).patch(`/customer-history/${data.id}`, params)
    }
}

// export const deleteHistory = (id) => {
//     let url = `${REACT_APP_BACKEND_URL}/transaction/delete/${id}`
//     return{
//         type: 'DELETE_HISTORY',
//         payload: axios.patch(url)
//     }
// }