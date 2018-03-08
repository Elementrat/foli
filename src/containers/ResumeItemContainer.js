import { connect } from 'react-redux'
import { selectResumeItem } from '../actions/index.js'
import ResumeItemComponent from '../components/ResumeItemComponent'

const mapStateToProps = state => {
    return {
       selectedResumeItemIndex : state.ui.selectedResumeItemIndex,
       experiences : state.experiences
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectedResumeItem : (i) => {
            dispatch(selectResumeItem(i))
        }
    }
}


const ResumeItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResumeItemComponent)

export default ResumeItem