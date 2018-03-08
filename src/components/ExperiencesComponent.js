import React, { Component } from 'react';
import '../App.css';
import ResumeItem from '../containers/ResumeItemContainer'

class ExperiencesComponent extends Component {

constructor(props){
    super(props)
    this.selectedItemIndex = 0
}

render() {

    const vis  = this.props.ui.showEntryCard ? 'invisible' : 'visible'
    const itemClasses = `ResumeItems ${vis}` 
    let detailsClasses = `ResumeItemDetails ${vis}`

    return (
        <div class name = "Resume">
        <div className = {itemClasses} >
        {
            //this.props.experiences
            this.props.experiences.map((exp, i) =>
                <ResumeItem experience = {exp}  index={i}/>
            )
        }

        </div>
        <div class = {detailsClasses}>
            <div class = "coreInfo">
                <div class = "company">
                    {this.props.experiences[this.props.ui.selectedResumeItemIndex].company}
                </div>
                <div class = "title">
                {this.props.experiences[this.props.ui.selectedResumeItemIndex].title}
                </div>
            </div>

            <div class = "description">
            {this.props.experiences[this.props.ui.selectedResumeItemIndex].description}
                </div>

        </div>
        </div>
        
    )
  }
}

export default ExperiencesComponent