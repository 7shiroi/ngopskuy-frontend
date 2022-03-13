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

export const requestResetPassword = (email, code, password, confirm_password) => {
    const params = new URLSearchParams()
    params.append('email', email)
    params.append('code', code)
    params.append('password', password)
    params.append('confirm_password', confirm_password)
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
export const getProfile = (token) => {
    return ({
        type: 'GET_PROFILE',
        payload: http(token).get('profile')
    })
}

export const editProfile = (token, data) => {
    const params = new FormData()
    params.append('first_name', data.first_name)
    params.append('last_name', data.last_name)
    params.append('email', data.email)
    params.append('address', data.address)
    params.append('phone_number', data.phone_number)
    params.append('birth_date', data.birth_date)
    params.append('image', data.image)
    console.log(data.image)
    return ({
        type: 'EDIT_PROFILE',
        payload: http(token, true).patch('profile', params)
    })
}

export const editPassword = (token, data) => {
    const params = new URLSearchParams()
    params.append('oldPassword', data.oldPassword)
    params.append('newPassword', data.newPassword)
    params.append('confirmNewPassword', data.confirmNewPassword)
    return ({
        type: 'EDIT_PASSWORD',
        payload: http(token).patch('profile/change_password', params)
    })
}
export const requestVerify = (token, email, code) => {
    const params = new URLSearchParams()
    params.append('email', email)
    params.append('code', code)
    return {
        type: 'REQUEST_VERIFY',
        payload: http(token).post('auth/verify', params),
        extra: email,
    }
}