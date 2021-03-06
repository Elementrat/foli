import { connect } from 'react-redux'
import { enterSite } from '../actions/index.js'
import AppComponent from '../components/AppComponent'

const mapStateToProps = state => {
    return {
        portfoliodata : state.portfoliodata,
        ui : state.ui
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEnterClick : () => {
            dispatch(enterSite())
        }
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent)

export default App