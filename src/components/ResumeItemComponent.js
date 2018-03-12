import React, {Component} from 'react'



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

        
    
        this.currentExperience = this.props.portfoliodata.experiences[this.props.ui.selectedResumeItemIndex]

        const vis  = this.props.index == this.props.ui.selectedResumeItemIndex ? 'ResumeItemDetails-Expanded' : 'ResumeItemDetails-Shrunk'
    
        let detailsClasses = `ResumeItemDetails  ${vis}`

        return (
            <div class = {detailsClasses}>
            <div class = "coreInfo">
                <div className = "company">
                    {this.props.experience.company}
                </div>
                <div class = "title">
                {this.props.experience.title}
                </div>
            </div>

            <div class = "description">

            <div class = "description-text">
                {this.props.experience.description}
            </div>
                
            <div class = "description-two-column">
            <div class = "description-column">
                      {this.props.experience.bullets && <ul class = "bullets">
                    {
                        this.props.experience.bullets.map(x => 
                            <li> <div class = "bullet-text"> {x}  </div> </li>
                        )
                    }
                    </ul>
                }
                </div>
                 <div class = "description-column">
                    {
                        this.props.experience.video && <iframe class = "videoembed" src="https://www.youtube.com/embed/rC7gUspzS9o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    }

                    {
                        this.props.experience.images &&  <img src = { this.images[this.props.experience.images[0]]}/>
                    }
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default ResumeItemComponent