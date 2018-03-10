import React, { Component } from 'react';
import '../App.css';
import ResumeItem from '../containers/ResumeItemContainer'

class ExperiencesComponent extends Component {

constructor(props){
    super(props)
    this.selectedItemIndex = 0
    this.lastKnownSelected = 0
  
}


render() {

    const vis  = this.props.ui.showEntryCard ? 'invisible' : 'visible'
    const itemClasses = `ResumeItems ${vis}` 
    let detailsClasses = `ResumeItemDetails ${vis}`

    let randDir = Math.random()
    let coreInfoAni = {
       // animation : `coreInfo-In ${randDir}s ease forwards`
    }

    return (
        <div className = "Resume">

        <div className = {itemClasses} > 
        {
            //this.props.experiences
            this.props.portfoliodata.experiences.map((exp, i) =>
                <ResumeItem experience = {exp}  index={i}/>
            )
        }

        </div>
        <div class = {detailsClasses}>
            <div class = "coreInfo">
                <div className = "company" style = {coreInfoAni}>
                    {this.props.portfoliodata.experiences[this.props.ui.selectedResumeItemIndex].company}
                </div>
                <div class = "title">
                {this.props.portfoliodata.experiences[this.props.ui.selectedResumeItemIndex].title}
                </div>
            </div>

            <div class = "description">
                {this.props.portfoliodata.experiences[this.props.ui.selectedResumeItemIndex].description}
                </div>
            </div>
        </div>
        
    )
  }
}

export default ExperiencesComponent