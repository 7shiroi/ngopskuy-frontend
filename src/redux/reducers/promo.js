
const promoState = {
    promo: [],
    pageInfo: {},
    isLoading: false,
    isError: false,
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
        console.log(data)
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
      case 'EDIT_PROMO_PENDING': {
        state.isLoading = true
        state.isError = false
        return {...state}
      }
      case 'EDIT_PROMO_FULFILLED': {
        const {data} = action.payload
        console.log(data)
        state.promo = data.result
        state.pageInfo = data.info
        state.isLoading = false
        return {...state}
      }
      case 'EDIT_PROMO_REJECTED': {
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
      default: {
          return {...state}
      }
    }
  }
  
  export default promo
