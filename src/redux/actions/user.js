import http from '../../helpers/http'

export const userSignUp = (first_name, last_name, email, password, confirm_password) => {
	const param = new URLSearchParams()
	param.append('first_name', first_name)
	param.append('last_name', last_name)
	param.append('email', email)
	param.append('password', password)
	param.append('confirm_password', confirm_password)
	return ({
		type: 'USER_SIGNUP',
		payload: http().post('/auth/register', param)
	})
}
