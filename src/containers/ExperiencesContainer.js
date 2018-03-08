import { connect } from 'react-redux'
import { enterSite } from '../actions/index.js'
import ExperiencesComponent from '../components/ExperiencesComponent'

const mapStateToProps = state => {
    return {
        experiences : state.experiences,
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

const Experiences = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExperiencesComponent)

export default Experiences