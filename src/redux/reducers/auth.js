const initialState = {
    token: null,
    userData: {},
    userHistory: {},
    isLoading: false,
    isError: false,
    errorMsg: '',
    errMsg: '',
    successMsg: ''
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
            state.errorMsg = ""
            state.errMsg = ""
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
        case 'REQUEST_RESET_PASSWORD_PENDING': {
            state.error = false
            state.isLoading = true
            state.message = ''
            return { ...state }
        }
        case 'REQUEST_RESET_PASSWORD_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            state.successMsg = data.message
            state.errorMsg = ""
            state.errMsg = ""
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
        case 'SET_EMAIL': {
            state.email = action.payload.email
            return { ...state }
        }
        case 'GET_PROFILE_PENDING': {
            state.error = false
            state.isLoading = true
            return { ...state }
        }
        case 'GET_PROFILE_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.userData = data.result
            return { ...state }

        }
        case 'GET_PROFILE_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            state.errorMsg = data.message
            return { ...state }
        }
        case 'EDIT_PROFILE_PENDING': {
            state.error = false
            state.isLoading = true
            state.message = ''
            return { ...state }
        }
        case 'EDIT_PROFILE_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            return { ...state }
        }
        case 'EDIT_PROFILE_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            state.errorMsg = data.error
            state.errMsg = data.message
            return { ...state }
        }
        case 'EDIT_PASSWORD_PENDING': {
            state.error = false
            state.isLoading = true
            state.message = ''
            return { ...state }
        }
        case 'EDIT_PASSWORD_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            state.successMsg = data.message
            state.errorMsg = ""
            state.errMsg = ""
            return { ...state }

        }
        case 'EDIT_PASSWORD_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            state.errorMsg = data.error
            state.errMsg = data.message
            return { ...state }
        }
        case 'REQUEST_VERIFY_PENDING': {
            state.error = false
            state.isLoading = true
            state.message = ''
            return { ...state }
        }
        case 'REQUEST_VERIFY_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            state.successMsg = data.message
            return { ...state }
        }
        case 'REQUEST_VERIFY_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            state.errorMsg = data.error
            state.errMsg = data.message
            return { ...state }
        }
        case 'CLEAR_MESSAGE': {
          state.errorMsg = ""
          state.errMsg = ""
          state.message = ""
          return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default auth