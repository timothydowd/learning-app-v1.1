import React, { Component } from 'react'
import { Router } from '@reach/router'
import Nav from './components/Nav'
import Home from './components/Home'
import './App.css'
import AntonymsStudy from './components/AntonymsStudy'
import SynonymsStudy from './components/SynonymsStudy'
import AntonymsTest from './components/AntonymsTest'
import SynonymsTest from './components/SynonymsTest'
import SignIn from './components/SignIn'

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav>

        </Nav>
        <Router>
          <Home path='/'/>
          <AntonymsStudy path='/antonyms_study'/>
          <SynonymsStudy path='/synonyms_study'/>
          <AntonymsTest path='/antonyms_test' />
          <SynonymsTest path='/synonyms_test' />
          <SignIn path='/sign_in' />
          
        </Router>

        
      </div>
    )
  }
}
