import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import history from './history'

const rootReducer = combineReducers({
	auth,
	user,
	history,
})

export default rootReducer