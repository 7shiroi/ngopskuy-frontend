const initialState = {
    // token: null,
    history: {},
    isLoading: true,
    isError: false,
    message: '',
    errorMsg: ''
}

const history = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_HISTORY_PENDING': {
            state.isLoading = true
            state.isError = false
            return { ...state }
        }
        case 'GET_HISTORY_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.isError = false
            state.history = data.result
            window.localStorage.setItem('userHistory', JSON.stringify(state.userHistory))
            return { ...state }
        }
        case 'GET_HISTORY_REJECTED': {
            const { error } = action.payload.response.data
            console.log(error)
            state.isLoading = false
            state.isError = true
            state.errorMsg = error
            return { ...state }
        }
        case 'DELETE_HISTORY_PENDING': {
            state.isLoading = true
            state.isError = false
            return { ...state }
        }
        case 'DELETE_HISTORY_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.isError = false
            state.message = data.message
            return { ...state }
        }
        case 'DELETE_HISTORY_REJECTED': {
            const { error } = action.payload.response.data
            console.log(error)
            state.isLoading = false
            state.isError = true
            state.errorMsg = error
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default history