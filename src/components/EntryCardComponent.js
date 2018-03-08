import React, { Component } from 'react';
import Experiences from '../containers/ExperiencesContainer'
import '../App.css';


class EntryCard extends Component {

constructor(props){
    super(props)
    //this.onClickedEnterBtn = this.onClickedEnterBtn.bind(this)
}

  render() {

    let containerAnimation = this.props.ui.showEntryCard  ? "Grow-NameHolder 1.5s forwards" : 'Shrink-NameHolder 3s forwards'

    let btnAnimation = this.props.ui.showEntryCard ? 'Grow-EnterBtn .4s ease forwards' : 'Shrink-EnterBtn .4s forwards'

    let containerCSS = {
      animation : containerAnimation,
      animationDelay : "0s"
    }

    let btnCSS = {
      animation : btnAnimation,
      animationDelay : "2s"
    }

    

    let elms =
  <div className = "NameHolder" style = {containerCSS}>

    <div className = "MyName">
   
      Alex Sohail
      <div className = "Tagline">
      </div>

    </div>

    <div className = "EnterBtn" style = {btnCSS} onClick={this.props.onEnterClick}>
    View Portfolio
    </div>

     <Experiences />

  </div>

    if(true){ //this.props.ui.showEntryCard){
      return elms
    }
    else{
      return null
    }
  }
}
 
export default EntryCard;
