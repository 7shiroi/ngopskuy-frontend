import http from '../../helpers/http'

export const getPromo = (id) => {
  return {
    type: 'GET_PROMO',
    payload: http().get(`/promo/${id}`)
  }
}

export const addPromo = (token, data) => {
  const inputData = new FormData()
  for (const key in data) {
    inputData.append(key, data[key]);
  }
  return {
    type: 'POST_PROMO',
    payload: http(token, true).post('/promo', inputData)
  }
}

export const editPromo = (token, id, data) => {
  const inputData = new FormData()
  for (const key in data) {
    inputData.append(key, data[key]);
  }
  return {
    type: 'EDIT_PROMO',
    payload: http(token, true).patch(`/promo/${id}`, inputData)
  }
}

export const deletePromo = (token, id) => {
  return {
    type: 'DELETE_PROMO',
    payload: http(token).patch(`/promo/delete/${id}`)
  }
}

export const getPromoDeliveryType = (id)=>{
  const data = new URLSearchParams(id)
  data.append('id_promo', id)
  return{
    type: 'GET_PROMO_DELIVERY_TYPE',
    payload: http().get('/promo_delivery_type/', data)
  }
}
