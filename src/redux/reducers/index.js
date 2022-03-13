import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import history from './history'
import transaction from './transaction'

const rootReducer = combineReducers({
	auth,
	user,
	history,
	transaction,
})

export default rootReducer