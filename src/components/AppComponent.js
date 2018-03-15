import React, { Component } from 'react';
//import ResumeItem from './components/ResumeItem';

import EntryCard from '../containers/EntryCardContainer';

import '../App.css';

class AppComponent extends React.Component {

  constructor(props){
    super(props)
  }

  render() {

    let elms =
      <div className="App">
        <EntryCard/>
      </div>

    return elms
    
  }
}

export default AppComponent