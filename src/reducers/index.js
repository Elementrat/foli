import { combineReducers } from 'redux'
import portfoliodata from './portfoliodata' 
import ui from './UI'

const portfolioApp = combineReducers({
    portfoliodata, ui
})

export default portfolioApp