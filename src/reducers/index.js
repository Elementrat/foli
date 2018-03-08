import { combineReducers } from 'redux'
import experiences from './experiences' 
import ui from './UI'

const portfolioApp = combineReducers({
    experiences, ui
})

export default portfolioApp