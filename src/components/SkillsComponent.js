import React, {Component} from 'react'
import '../App.css'


class SkillsComponent extends React.Component{

    //has skills
    constructor(args){
        super(args)
    }

    delayCSS(index){
        return {
            animationDelay : index*.1 + "s"
        }
    }

    render(){

        return (
        
        <div className = "Skills">
            <div class = "skill-column">
                <div class = "skill-type"> Languages</div>
                {
                    this.props.portfoliodata.skills.languages.map((skill, index) =>

                    <div class = "skillbox" >
                        <div className = "skill" style = {this.delayCSS(index)}>{skill.name} </div>
                    </div>
                    )
                }
            </div>

            <div class = "skill-column">
                <div class = "skill-type"> Technologies</div>
                {
                    this.props.portfoliodata.skills.technologies.map((tech, index) =>

                    <div class = "skillbox" >
                        <div className = "skill" style = {this.delayCSS(index)}>{tech.name} </div>
                    </div>
                    )
                }
            </div>


            <div class = "skill-column">
                <div class = "skill-type"> Things I Enjoy</div>
                {
                    this.props.portfoliodata.skills.interests.map((interest, index) =>

                        <div class = "skillbox">
                            <div className = "skill" style = {this.delayCSS(index)}>{interest.name}</div>
                        </div>
                    )
                }

            </div>

        </div>

     )
    }
}


export default SkillsComponent