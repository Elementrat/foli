import React, {Component} from 'react'

import ResumeMenuItem from '../containers/ResumeMenuItemContainer'
import ResumeItem from '../containers/ResumeItemContainer'

import minecraft from "../img/minecraft.jpg"
import intensub2menu from "../img/intensub2menu.PNG"
import afpcsite_testimonial from "../img/afpcsite_testimonial.PNG"
import atmo from "../img/atmo.PNG"

import '../App.css'

class ResumeItemComponent extends React.Component{
    
    constructor(args){
        super(args)
        this.images = {
            minecraft,
            intensub2menu,
            afpcsite_testimonial, 
            atmo
        }
    }
    
    render(){

        const vis  = this.props.ui.showEntryCard ? 'invisible' : 'visible'
    
        let detailsClasses = `ResumeItemDetails ${vis}`
    
        this.currentExperience = this.props.portfoliodata.experiences[this.props.ui.selectedResumeItemIndex]

        
        return (
            <div class = {detailsClasses} opacity = {this.props.i == this.props.ui.selectedResumeItemIndex ? 1 : 0} >
            <div class = "coreInfo">
                <div className = "company">
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
        )
    }
}

export default ResumeItemComponent