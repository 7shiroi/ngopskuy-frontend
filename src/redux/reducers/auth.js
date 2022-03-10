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
	default: {
		return { ...state }
	}
	}
}

export default auth