
const promoState = {
    promo: {},
    pageInfo: {},
    deliveryType:{},
    isLoading: false,
    isError: false,
    errorMsg : '',
    successMsg: '',
    
  }
  
  const promo = (state=promoState, action)=>{
    switch(action.type){
      case 'GET_PROMO_PENDING': {
        state.isLoading = true
        state.isError = false
        return {...state}
      }
      case 'GET_PROMO_FULFILLED': {
        const {data} = action.payload
        state.successMsg = data.message
        state.promo = data.result
        state.pageInfo = data.info
        state.isLoading = false
        return {...state}
      }
      case 'GET_PROMO_REJECTED': {
        state.isLoading = false
        state.isError = true
        return {...state}
      }
      case 'GET_PROMO_DELIVERY_TYPE_PENDING': {
        state.isLoading = true
        state.isError = false
        return {...state}
      }
      case 'GET_PROMO_DELIVERY_TYPE_FULFILLED': {
        const {data} = action.payload
        state.successMsg = data.message
        state.deliveryType = data.result
        state.isLoading = false
        return {...state}
      }
      case 'GET_PROMO_DELIVERY_TYPE_REJECTED': {
        state.isLoading = false
        state.isError = true
        return {...state}
      }
      case 'EDIT_PROMO_PENDING': {
        state.isLoading = true
        state.isError = false
        return {...state}
      }
      case 'EDIT_PROMO_FULFILLED': {
        const {data} = action.payload
        console.log(data)
        state.successMsg = data.message
        state.promo = data.result
        state.pageInfo = data.info
        state.isLoading = false
        return {...state}
      }
      case 'EDIT_PROMO_REJECTED': {
        const {error} = action.payload.response.data
        state.errorMsg = error
        state.isLoading = false
        state.isError = true
        return {...state}
      }
      case 'DELETE_PROMO_PENDING': {
        state.isLoading = true
        state.isError = false
        return {...state}
      }
      case 'DELETE_PROMO_FULFILLED': {
        const {data} = action.payload
        console.log(data)
        state.promo = data
        state.pageInfo = data.info
        state.isLoading = false
        return {...state}
      }
      case 'DELETE_PROMO_REJECTED': {
        state.isLoading = false
        state.isError = true
        return {...state}
      }
      case 'POST_PROMO_PENDING': {
        state.isLoading = true
        state.isError = false
        return {...state}
      }
      case 'POST_PROMO_FULFILLED': {
        const {data} = action.payload
        console.log(data)
        state.promo = data
        state.pageInfo = data.info
        state.isLoading = false
        return {...state}
      }
      case 'POST_PROMO_REJECTED': {
        state.isLoading = false
        state.isError = true
        return {...state}
      }
      case 'CLEAR_MESSAGE': {
        state.errorMsg = ""
        state.successMsg = ""
        return { ...state }
      }
      default: {
          return {...state}
      }
    }
  }
  
  export default promo
