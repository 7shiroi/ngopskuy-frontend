const categoryState = {
  category: [],
  isLoading: false,
  isError: false,
}

const category = (state=categoryState, action)=>{
  switch(action.type){
    case 'GET_CATEGORY_PENDING': {
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'GET_CATEGORY_FULFILLED': {
      const {data} = action.payload
      state.category = data.result
      state.isLoading = false
      return {...state}
    }
    case 'GET_CATEGORY_REJECTED': {
      state.isLoading = false
      state.isError = true
      return {...state}
    }
    default: {
        return {...state}
    }
  }
}

export default category