import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import product from './product'
import productall from './productall'
import buttons from './buttons'

const rootReducer = combineReducers({
    auth,
    user,
    product,
    productall,
    buttons,
})

export default rootReducer