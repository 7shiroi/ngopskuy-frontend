const initialState = {
    // token: null,
    useCart: {},
    isLoading: true,
    isError: false,
    message: '',
    errorMsg: ''
}

const userCart = (state=initialState, action) => {
    switch(action.type) {
        case 'GET_USER_CART_PENDING': {
            state.isLoading = true
            state.isError = false
            return state
        }
        case 'GET_USER_CART_FULFILLED': {
            const {data} = action.payload
            state.isLoading = false
            state.isError = false
            state.cart = data.result
            return state
        }
        case 'GET_USER_CART_REJECTED': {
          const {error} = action.payload.response.data
          console.log(error)
          state.isLoading = false
          state.isError = true
          state.errorMsg = error
          return state
        }
        case 'CHECKOUT_USER_CART_PENDING': {
            state.isLoading = true
            state.isError = false
            return state
        }
        case 'CHECKOUT_USER_CART_FULFILLED': {
            const {data} = action.payload
            state.isLoading = false
            state.isError = false
            state.cart = data.result
            return state
        }
        case 'CHECKOUT_USER_CART_REJECTED': {
          const {error} = action.payload.response.data
          console.log(error)
          state.isLoading = false
          state.isError = true
          state.errorMsg = error
          return state
        }
        case 'ADD_USER_CART_PENDING': {
            state.isLoading = true
            state.isError = false
            return state
        }
        case 'ADD_USER_CART_FULFILLED': {
            const {data} = action.payload
            state.isLoading = false
            state.isError = false
            state.cart = data.result
            return state
        }
        case 'ADD_USER_CART_REJECTED': {
          const {error} = action.payload.response.data
          console.log(error)
          state.isLoading = false
          state.isError = true
          state.errorMsg = error
          return state
        }
        // case 'DELETE_CART_PENDING': {
        //     state.isLoading = true
        //     state.isError = false
        //     return state
        // }
        // case 'DELETE_CART_FULFILLED': {
        //     const {data} = action.payload
        //     state.isLoading = false
        //     state.isError = false
        //     state.message = data.message
        //     return state
        // }
        // case 'DELETE_CART_REJECTED': {
        //   const {error} = action.payload.response.data
        //   console.log(error)
        //   state.isLoading = false
        //   state.isError = true
        //   state.errorMsg = error
        //   return state
        // }
        default: {
            return {...state}
        }
    }
}

export default userCart