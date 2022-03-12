import http from '../../helpers/http'

export const getProduct = (id)=> {
    return {
        type: 'GET_PRODUCT',
        payload: http().get(`/product/${id}`)
    }
}