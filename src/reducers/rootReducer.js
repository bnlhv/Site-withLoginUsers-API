import { combineReducers } from 'redux'
import siteReducer from './siteReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
    site: siteReducer,
    login: loginReducer
})

export default rootReducer;