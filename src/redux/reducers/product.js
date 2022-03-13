
const productState = {
    product: [],
    pageInfo: {},
    isLoading: false,
    isError: false,
  }
  
  const product = (state=productState, action)=>{
    switch(action.type){
      case 'GET_PRODUCT_PENDING': {
        state.isLoading = true
        state.isError = false
        return {...state}
      }
      case 'GET_PRODUCT_FULFILLED': {
        const {data} = action.payload
        console.log(data)
        state.product = data.result
        state.pageInfo = data.info
        state.isLoading = false
        return {...state}
      }
      case 'GET_PRODUCT_REJECTED': {
        state.isLoading = false
        state.isError = true
        return {...state}
      }
      case 'EDIT_PRODUCT_PENDING': {
        state.isLoading = true
        state.isError = false
        return {...state}
      }
      case 'EDIT_PRODUCT_FULFILLED': {
        const {data} = action.payload
        console.log(data)
        state.product = data.result
        state.pageInfo = data.info
        state.isLoading = false
        return {...state}
      }
      case 'EDIT_PRODUCT_REJECTED': {
        state.isLoading = false
        state.isError = true
        return {...state}
      }
      case 'DELETE_PRODUCT_PENDING': {
        state.isLoading = true
        state.isError = false
        return {...state}
      }
      case 'DELETE_PRODUCT_FULFILLED': {
        const {data} = action.payload
        console.log(data)
        state.product = data
        state.pageInfo = data.info
        state.isLoading = false
        return {...state}
      }
      case 'DELETE_PRODUCT_REJECTED': {
        state.isLoading = false
        state.isError = true
        return {...state}
      }
      case 'POST_PRODUCT_PENDING': {
        state.isLoading = true
        state.isError = false
        return {...state}
      }
      case 'POST_PRODUCT_FULFILLED': {
        const {data} = action.payload
        console.log(data)
        state.product = data
        state.pageInfo = data.info
        state.isLoading = false
        return {...state}
      }
      case 'POST_PRODUCT_REJECTED': {
        state.isLoading = false
        state.isError = true
        return {...state}
      }
      default: {
          return {...state}
      }
    }
  }
  
  export default product
