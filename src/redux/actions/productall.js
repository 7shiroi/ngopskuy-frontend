import http from '../../helpers/http'

export const getProductAll = (token) => {
    return ({
        type: 'GET_PRODUCT_ALL',
        payload: http(token).get('/product')
    })
}