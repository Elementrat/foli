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
    let containerAnimation = this.props.ui.showEntryCard  ? "Grow-NameHolder 1s forwards" : 'Shrink-NameHolder 4s forwards'

    let btnAnimation = this.props.ui.showEntryCard ? 'Grow-EnterBtn .4s ease forwards' : 'Shrink-EnterBtn .4s forwards'

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

      <div className = "EnterBtn" style = {btnCSS} onClick={this.props.onEnterClick}>
        View Portfolio
      </div>

        <Nav/>
        {this.checkTabActive('experience') && <Experiences />}
        {this.checkTabActive('skills') && <Skills />}


    </div>

  return elms

  }
}
 
export default EntryCard;
