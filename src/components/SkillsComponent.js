import React, {Component} from 'react'
import '../App.css'


class SkillsComponent extends React.Component{

    //has skills
    constructor(args){
        super(args)
    }

    render(){

        return (
        
        <div className = "Skills">
            <div class = "skill-column">
                <div class = "skill-type"> Languages</div>
                {
                    this.props.portfoliodata.skills.languages.map((skill, index) =>
                        <div className = "skill">{skill.name} </div>
                    )
                }
            </div>

            <div class = "skill-column">
                <div class = "skill-type"> Technologies</div>
                {
                    this.props.portfoliodata.skills.technologies.map((tech, index) =>
                        <div className = "skill">{tech.name} </div>
                    )
                }
            </div>


            <div class = "skill-column">
                <div class = "skill-type"> Things I Enjoy</div>
            </div>

        </div>

     )
    }
}


export default SkillsComponent