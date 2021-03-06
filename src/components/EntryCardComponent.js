import React, { Component } from 'react';
import Experiences from '../containers/ExperiencesContainer'
import Nav from '../containers/NavContainer'
import Skills from '../containers/SkillsContainer'

import '../App.css';


class EntryCard extends Component {

constructor(props){
    super(props)
    this.props.onChangeTabClick.bind(this, )
    //this.onClickedEnterBtn = this.onClickedEnterBtn.bind(this)
}

onChangeTabClick(tab, e){
  e.preventDefault()
  this.props.onChangeTabClick(tab)

  this.tet.bind(this)
}

checkTabActive(tabStr){
  return this.props.ui.activeTab == tabStr
}

render() {
    let containerAnimation = this.props.ui.showEntryCard  ? "Grow-NameHolder .7s forwards" : 'Shrink-NameHolder 3s forwards'

    let btnAnimation = this.props.ui.showEntryCard ? 'Grow-EnterBtn .2s ease forwards' : 'Shrink-EnterBtn .3s forwards'

    let nameTransition = this.props.ui.showEntryCard ? 'Big-Name' : 'Small-Name'

    let containerCSS = {
      animation : containerAnimation,
      animationDelay : "0s"
    }

    let btnCSS = {
      animation : btnAnimation,
      animationDelay : "1s"
    }

    let nameClasses = `MyName ${nameTransition}`

    let elms =
    <div className = "NameHolder" style = {containerCSS}>

      <div className = {nameClasses}>
        Alex Sohail
      </div>


        <Nav/>
        <div className = "EnterBtn" style = {btnCSS} onClick={this.props.onEnterClick}>
        View Portfolio
      </div>

        {this.checkTabActive('experience') && <Experiences />}
        {this.checkTabActive('skills') && <Skills />}


    </div>

  return elms

  }
}
 
export default EntryCard;
