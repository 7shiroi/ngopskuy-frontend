const initialState = {
    isLoading: false,
    isError: false,
    product: {},
    successMsg: '',
    errorMsg: ''
}

const productall = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_ALL_PENDING': {
            state.isLoading = true
            state.isError = false
            state.errorMsg = ''
            state.successMsg = ''
            return { ...state }
        }
        case 'GET_PRODUCT_ALL_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.isError = false
            state.successMsg = data.message
            state.product = data.result
            return { ...state }
        }
        case 'GET_PRODUCT_ALL_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.isError = true
            state.errorMsg = data.error

            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default productall