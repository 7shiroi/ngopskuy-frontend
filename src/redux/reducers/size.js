const sizeState = {
  size: [],
  isLoading: false,
  isError: false,
}

const size = (state=sizeState, action)=>{
  switch(action.type){
    case 'GET_SIZE_PENDING': {
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'GET_SIZE_FULFILLED': {
      const {data} = action.payload
      state.size = data.result
      state.isLoading = false
      return {...state}
    }
    case 'GET_SIZE_REJECTED': {
      state.isLoading = false
      state.isError = true
      return {...state}
    }
    default: {
        return {...state}
    }
  }
}

export default size