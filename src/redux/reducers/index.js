import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import product from './product'
import productall from './productall'
import buttons from './buttons'
import category from './category'
import promo from './promo'

const rootReducer = combineReducers({
    auth,
    user,
    category,
    product,
    productall,
    buttons,
    promo
})

export default rootReducer