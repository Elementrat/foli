import React, {Component} from 'react'
import '../App.css'
import gh from '../img/github.svg'
import linkedin from '../img/linkedin.svg'


class NavComponent extends React.Component{

    constructor(argo){
        super(argo)
    }
    render(){

        let githubIconStyle = "url("+gh+")"

        let linkedinIconStyle = "url("+linkedin+")"


        return (

            <div class = "Nav">
           
            <div class = "name">
                 Alex Sohail
             </div>

        <div className = "menu">
           

            <div class = {this.props.ui.activeTab == 'experience' ? 'menu-item selected' : 'menu-item not-selected'} onClick = {() => this.props.onChangeTabClick('experience')}>
                Prior Experience
            </div>
            <div class = {this.props.ui.activeTab == 'skills' ? 'menu-item selected' : 'menu-item not-selected'}   onClick = {()=> this.props.onChangeTabClick('skills')}>
                Skills
            </div>
        </div>

        <div class = "email">    
         
        </div>  

        <div class = "icons">
        
            <a href = "https://github.com/Elementrat" target = "_blank"> <img class = "icon" src={gh} fill ="#FFF"/> </a>
            <a href = "https://www.linkedin.com/in/alex-sohail-1bb98a54/" target = "_blank"> <img class = "icon" src={linkedin}/> </a> </div>

        </div>
        )
    }
}

export default NavComponent