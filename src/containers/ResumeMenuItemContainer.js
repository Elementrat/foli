import { connect } from 'react-redux'
import { selectResumeItem } from '../actions/index.js'
import ResumeMenuItemComponent from '../components/ResumeMenuItemComponent'

const mapStateToProps = state => {
    return {
       selectedResumeItemIndex : state.ui.selectedResumeItemIndex,
       portfoliodata : state.portfoliodata
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectedResumeItem : (i) => {
            dispatch(selectResumeItem(i))
        }
    }
}


const ResumeMenuItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResumeMenuItemComponent)

export default ResumeMenuItem