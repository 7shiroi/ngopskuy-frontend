import http from '../../helpers/http'


export const login = (email, password) => {
	const param = new URLSearchParams()
	param.append('email', email)
	param.append('password', password)
	return ({
		type: 'AUTH_LOGIN',
		payload: http().post('/auth/login', param)
	})
}

export const requestResetPassword = (email) => {
    const params = new URLSearchParams()
    params.append('email', email)
    return {
        type: 'REQUEST_RESET_PASSWORD',
        payload: http().post('auth/forgot-password', params),
        extra: email,
    }
}
export const resetPassword = (code, email, password, confirmPassword) => {
    const params = new URLSearchParams()
    params.append('code', code)
    params.append('email', email)
    params.append('password', password)
    params.append('confirmPassword', confirmPassword)
    return {
        type: 'RESET_PASSWORD',
        payload: http().post('auth/forgot-password', params)
    }
}
