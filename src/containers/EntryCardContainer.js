import { connect } from 'react-redux'
import { enterSite, changeTab  } from '../actions/index.js'
import EntryCardComponent from '../components/EntryCardComponent'


const mapStateToProps = state => {
    return {
        ui : state.ui
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEnterClick : () => {
            dispatch(enterSite())
            dispatch(changeTab('experience'))
        },
        onChangeTabClick : (tab) =>{
            dispatch(changeTab(tab))
        }
    }
}


const EntryCard = connect(
    mapStateToProps,
    mapDispatchToProps
)(EntryCardComponent)

export default EntryCard