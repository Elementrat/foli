import React, { Component } from 'react';


import '../App.css';

class ResumeItemComponent extends Component {

constructor(props){
    super(props)
}

handleClick = () =>{
  this.props.onSelectedResumeItem(this.props.index)
}

render() {

  let delayIndex = this.props.index
  let delayTime = 2 + delayIndex

  let delayerCSS = {
    animationDelay : delayTime + .5 +'s',
    animationDuration : '1s'
  }

  let logoStr = this.props.experience.logo
  let isSelected = this.props.index == this.props.selectedResumeItemIndex

  logoStr +=  isSelected ? '_light' : '_dark'
  let bgColor = isSelected ? 'rgba(255,255,255,255)' : 'rgba(0,0,0,255)'

  let srcString = `url(/img/${logoStr}.png`

  let imgBind = {
    backgroundImage : srcString,
    animationDelay : delayTime + .5 +'s',
    animationDuration : '1s',
  }

  let imgClassName = isSelected ? "item-selected" : "item-not-selected"
  let imgClasses = `logo ${imgClassName}`

    return (
      <div className="resItem" style = {delayerCSS} onClick = {this.handleClick}>

        <div className = {imgClasses} style = {imgBind}>

        </div>
      </div>

    )
  }
}

export default ResumeItemComponent
