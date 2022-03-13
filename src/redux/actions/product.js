import http from '../../helpers/http'

export const getProduct = (id)=> {
    return {
        type: 'GET_PRODUCT',
        payload: http().get(`/product/${id}`)
    }
}

export const updateProduct = (token, id, image, name, description, price)=> {
    let formData = new FormData()
    formData.append("image", image);
    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    return {
        type: 'EDIT_PRODUCT',
        payload: http(token).patch(`/product/${id}`)
    }
}

export const deleteProduct = (token, id)=> {
    return {
        type: 'DELETE_PRODUCT',
        payload: http(token).patch(`/product/delete/${id}`)
    }
}

export const newProduct = (token, name, description, price, deliveriHourStart, deliveriHourEnd, image)=> {
    const params = new URLSearchParams()
    params.append('name', name)
    params.append('description', description)
    params.append('price', price)
    params.append('deliveriHourStart', deliveriHourStart)
    params.append('deliveriHourEnd', deliveriHourEnd)
    params.append('image', image)
    return {
        type: 'POST_PRODUCT',
        payload: http(token).post('/product')
    }
}