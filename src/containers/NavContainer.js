import { connect } from 'react-redux'
import { changeTab  } from '../actions/index.js'
import NavComponent from '../components/NavComponent'


const mapStateToProps = state => {
    return {
        ui : state.ui
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeTabClick : (tab) =>{
            dispatch(changeTab(tab))
        }
    }
}


const Nav = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavComponent)

export default Nav