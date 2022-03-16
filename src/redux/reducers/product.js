
const productState = {
    product: [],
    pageInfo: {},
    isLoading: false,
    isError: false,
    errorMsg: '',
    errMsg: '',
    successMsg: ''
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
        state.message = ''
        return {...state}
      }
      case 'EDIT_PRODUCT_FULFILLED': {
        const {data} = action.payload
        console.log(data)
        state.product = data.result
        state.pageInfo = data.info
        state.isLoading = false
        state.isError = false
        state.errorMsg = ""
        state.message = data.message
        return {...state}
      }
      case 'EDIT_PRODUCT_REJECTED': {
        const { data } = action.payload.response
        state.isLoading = false
        state.error = true
        state.errorMsg = data.error
        state.errMsg = data.message
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
        state.message = ''
        return {...state}
      }
      case 'POST_PRODUCT_FULFILLED': {
        const {data} = action.payload
        console.log(data)        
        state.errorMsg = ""
        state.product = data.result
        state.pageInfo = data.info
        state.isLoading = false
        state.isError = false
        state.message = data.message
        return {...state}
      }
      case 'POST_PRODUCT_REJECTED': {
        const { data } = action.payload.response
        state.isLoading = false
        state.error = true
        state.errorMsg = data.error
        state.errMsg = data.message
        return {...state}
      }
      default: {
          return {...state}
      }
    }
  }
  
  export default product
