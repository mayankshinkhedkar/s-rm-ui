import { combineReducers } from 'redux'
import peoplee from './people'
import users from './users'
import demoText from './demoReducer'

const rootReducer = combineReducers({
    users,
    peoplee,
    demoText
})

export default rootReducer