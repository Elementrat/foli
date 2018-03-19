import React, { Component } from 'react';
import xbox_dark from '../img/xbox_dark.png'
import xbox_light from '../img/xbox_light.png'
import office_dark from '../img/office_dark.png'
import office_light from '../img/office_light.png'
import skype_dark from '../img/skype_dark.png'
import skype_light from '../img/skype_light.png'
import door6_dark from '../img/door6_dark.png'
import door6_light from '../img/door6_light.png'
import afpc_dark from '../img/afpc_dark.png'
import afpc_light from '../img/afpc_light.png'
import elementrat_dark from '../img/elementrat_dark.png'
import elementrat_light from '../img/elementrat_light.png'


import '../App.css';

class ResumeMenuItemComponent extends Component {



constructor(props){
    super(props)
    this.logos = {
      xbox_dark,
      xbox_light,
      office_light,
      office_dark,
      skype_dark,
      skype_light,
      door6_dark,
      door6_light,
      afpc_dark,
      afpc_light,
      elementrat_dark,
      elementrat_light,
    }
}

handleClick = () =>{
  this.props.onSelectedResumeItem(this.props.index)
}

render() {

  let delayIndex = Number(this.props.index)
  let delayTime =  (delayIndex*.2)

  let logoStr = this.props.experience.logo
  let isSelected = this.props.index == this.props.selectedResumeItemIndex

  logoStr +=  isSelected ? '_light' : '_dark'

  let srcString = this.logos[logoStr] // `url(/img/${logoStr}.png`


  let imgBind = {
    backgroundImage : `url(${srcString})`,
    animationDelay : delayTime +'s',
    animationDuration : '1s',
  }

  let imgClassName = isSelected ? "item-selected" : "item-not-selected"
  let imgClasses = `logo ${imgClassName}`

  let resItemClasses = `resItem ${imgClassName}`

    return (
      <div className = {resItemClasses} onClick = {this.handleClick}>

        <div className = {imgClasses} style = {this.imgBind}>

        </div>
      </div>

    )
  }
}

export default ResumeMenuItemComponent
