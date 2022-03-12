const initialState = {
    token: null,
    userData: {},
    userHistory: {},
    isLoading: false,
    isError: false,
    errorMsg: '',
    errMsg: ''
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN_PENDING': {
            state.isLoading = true
            state.isError = false
            state.errorMsg = ''
            return { ...state }
        }
        case 'AUTH_LOGIN_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.isError = false
            state.token = data.result

            if (!window.localStorage.getItem('token')) {
                window.localStorage.setItem('token', state.token)
            }
            return { ...state }
        }
        case 'AUTH_LOGIN_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.isError = true
            state.errorMsg = data.error
            state.errMsg = data.message

            return { ...state }
        }
        case 'AUTH_LOGOUT': {
            state.token = null
            state.userData = {}
            window.localStorage.removeItem('token')
            return { ...state }
        }
        case 'REQUEST_RESET_PASSWORD_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            state.successMsg = data.message
            return { ...state }
        }
        case 'REQUEST_RESET_PASSWORD_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            state.errorMsg = data.error
            state.errMsg = data.message
            return { ...state }
        }
        case 'RESET_PASSWORD_PENDING': {
            state.error = false
            state.isLoading = true
            state.message = ''
            return { ...state }
        }
        case 'SET_EMAIL': {
            state.email = action.payload.email
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default auth