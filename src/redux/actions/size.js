import http from '../../helpers/http'

export const getSize = ()=> {
    return {
        type: 'GET_SIZE',
        payload: http().get(`/size`)
    }
}