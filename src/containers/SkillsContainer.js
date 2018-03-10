import { connect } from 'react-redux'
import { enterSite } from '../actions/index.js'
import SkillsComponent from '../components/SkillsComponent'


const mapStateToProps = state => {
    return {
        portfoliodata : state.portfoliodata,
        ui : state.ui
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const Skills = connect(
    mapStateToProps,
    mapDispatchToProps
)(SkillsComponent)

export default Skills