import React, { Component } from 'react';
import ResumeMenuItem from '../containers/ResumeMenuItemContainer'
import ResumeItem from '../containers/ResumeItemContainer'
import '../App.css';

class ExperiencesComponent extends Component {

constructor(props){
    super(props)
    this.selectedItemIndex = 0
    this.lastKnownSelected = 0
    this.currentExperience = this.props.portfoliodata.experiences[this.props.ui.selectedResumeItemIndex]

}


render() {

    const vis  = this.props.ui.showEntryCard ? 'invisible' : 'visible'
    const itemClasses = `ResumeItems ${vis}` 

    return (
        <div className = "Resume">

        <div className = {itemClasses} > 
        {
            //this.props.experiences
            this.props.portfoliodata.experiences.map((exp, i) =>
                <ResumeMenuItem experience = {exp}  index={i}/>
            )
        }

        </div>

        {
             this.props.portfoliodata.experiences.map((exp, i) =>
             i == this.props.ui.selectedResumeItemIndex && <ResumeItem experience = {exp}  index={i}/>
            )

        }


        {

       
    
        }


        </div>
        
    )
  }
}

export default ExperiencesComponent