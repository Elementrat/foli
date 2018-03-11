import React, { Component } from 'react';
import '../App.css';
import ResumeItem from '../containers/ResumeItemContainer'

import minecraft from "../img/minecraft.jpg"
import intensub2menu from "../img/intensub2menu.PNG"
import afpcsite_testimonial from "../img/afpcsite_testimonial.PNG"
import atmo from "../img/atmo.PNG"

class ExperiencesComponent extends Component {

constructor(props){
    super(props)
    this.selectedItemIndex = 0
    this.lastKnownSelected = 0
    this.currentExperience = this.props.portfoliodata.experiences[this.props.ui.selectedResumeItemIndex]
    this.images = {
        minecraft,
        intensub2menu,
        afpcsite_testimonial, 
        atmo
    }
}


render() {

    const vis  = this.props.ui.showEntryCard ? 'invisible' : 'visible'
    const itemClasses = `ResumeItems ${vis}` 
    let detailsClasses = `ResumeItemDetails ${vis}`

    this.currentExperience = this.props.portfoliodata.experiences[this.props.ui.selectedResumeItemIndex]

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

            <div class = "description-text">
                {this.props.portfoliodata.experiences[this.props.ui.selectedResumeItemIndex].description}
            </div>
                
            <div class = "description-two-column">
            <div class = "description-column">
                      {this.currentExperience.bullets && <ul class = "bullets">
                    {
                        this.currentExperience.bullets.map(x => 
                            <li> <div class = "bullet-text"> {x}  </div> </li>
                        )
                    }
                    </ul>
                }
                </div>
                 <div class = "description-column">
                    {
                        this.props.portfoliodata.experiences[this.props.ui.selectedResumeItemIndex].video && <iframe class = "videoembed" src="https://www.youtube.com/embed/rC7gUspzS9o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    }

                    {
                        this.props.portfoliodata.experiences[this.props.ui.selectedResumeItemIndex].images &&  <img src = { this.images[this.props.portfoliodata.experiences[this.props.ui.selectedResumeItemIndex].images[0]]}/>
                    }
                </div>
                </div>
            </div>
            </div>
        </div>
        
    )
  }
}

export default ExperiencesComponent