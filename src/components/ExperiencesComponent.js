import React, { Component } from 'react';
import '../App.css';
import ResumeItem from '../containers/ResumeItemContainer'

class ExperiencesComponent extends Component {

constructor(props){
    super(props)
    this.selectedItemIndex = 0
    this.lastKnownSelected = 0
    this.props.onChangeTabClick.bind(this, )
}

onChangeTabClick(tab, e){
    e.preventDefault()
    this.props.onChangeTabClick(tab)
}

render() {

    const vis  = this.props.ui.showEntryCard ? 'invisible' : 'visible'
    const itemClasses = `ResumeItems ${vis}` 
    let detailsClasses = `ResumeItemDetails ${vis}`

    let randDir = Math.random()

    let isSelected = function(tab){

    }

    let coreInfoAni = {
       // animation : `coreInfo-In ${randDir}s ease forwards`
    }

    return (
        <div className = "Resume">

        <div className = "menu">
            <div class = {this.props.ui.activeTab == 'experience' ? 'menu-item selected' : 'menu-item not-selected'} onClick = {() => this.props.onChangeTabClick('experience')}>
                Prior Experience
            </div>
            <div class = {this.props.ui.activeTab == 'skills' ? 'menu-item selected' : 'menu-item not-selected'}   onClick = {()=> this.props.onChangeTabClick('skills')}>
                Skills
            </div>
            <div class = {this.props.ui.activeTab == 'interests' ? 'menu-item selected' : 'menu-item not-selected'}   onClick = {()=>this.props.onChangeTabClick('interests')}>
                Interests
            </div>
        </div>

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
                <div className = "company" style = {coreInfoAni}>
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