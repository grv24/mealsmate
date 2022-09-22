import React, { Component } from 'react'
import Footer from './Components/Footer'
import Main from './Components/Main/Main'
import NavBar from './Components/NavBar'

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <Main/>
        <Footer/>
      </>
    )
  }
}
