const initialState = {
    // token: null,
    transaction: {},
    isLoading: true,
    isError: false,
    message: '',
    errorMsg: ''
}

const transaction = (state=initialState, action) => {
    switch(action.type) {
        case 'GET_TRANSACTION_PENDING': {
            state.isLoading = true
            state.isError = false
            return state
        }
        case 'GET_TRANSACTION_FULFILLED': {
            const {data} = action.payload
            state.isLoading = false
            state.isError = false
            state.transaction = data.result
            window.localStorage.setItem('usertransaction', JSON.stringify(state.userHistory))
            return state
        }
        case 'GET_TRANSACTION_REJECTED': {
          const {error} = action.payload.response.data
          console.log(error)
          state.isLoading = false
          state.isError = true
          state.errorMsg = error
          return state
        }
        case 'EDIT_TRANSACTION_PENDING': {
            state.isLoading = true
            state.isError = false
            return state
        }
        case 'EDIT_TRANSACTION_FULFILLED': {
            const {data} = action.payload
            state.isLoading = false
            state.isError = false
            state.transaction = data.result
            return state
        }
        case 'EDIT_TRANSACTION_REJECTED': {
          const {error} = action.payload.response.data
          console.log(error)
          state.isLoading = false
          state.isError = true
          state.errorMsg = error
          return state
        }
        // case 'DELETE_HISTORY_PENDING': {
        //     state.isLoading = true
        //     state.isError = false
        //     return state
        // }
        // case 'DELETE_HISTORY_FULFILLED': {
        //     const {data} = action.payload
        //     state.isLoading = false
        //     state.isError = false
        //     state.message = data.message
        //     return state
        // }
        // case 'DELETE_HISTORY_REJECTED': {
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

export default transaction