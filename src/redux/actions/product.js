import http from '../../helpers/http'

export const getProduct = (token) => {
  return ({
    type: 'GET_PRODUCT',
    payload: http(token).get('product')
  })
}

export const getProductById = (id) => {
  return {
    type: 'GET_PRODUCT',
    payload: http().get(`/product/${id}`)
  }
}

export const addProduct = (token, data) => {
  const inputData = new FormData()
  for (const key in data) {
    inputData.append(key, data[key]);
  }
  return {
    type: 'ADD_PRODUCT',
    payload: http(token, true).post('/product')
  }
}

export const editProduct = (token, id, data) => {
  const inputData = new FormData()
  for (const key in data) {
    inputData.append(key, data[key]);
  }
  return {
    type: 'EDIT_PRODUCT',
    payload: http(token, true).patch(`/product/${id}`)
  }
}

export const deleteProduct = (token, id) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: http(token).patch(`/product/delete/${id}`)
  }
}