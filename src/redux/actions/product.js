import http from '../../helpers/http'

export const getProduct = (token) => {
    return ({
        type: 'GET_PRODUCT',
        payload: http(token).get('product')
    })
}