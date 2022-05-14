import React, { Component } from 'react'
import {NavLink,Route,Routes,Navigate} from 'react-router-dom'
import './App.css'

import About from './pages/about'
import Home from './pages/home'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">React Router</div>

        <div className="nav">
          <NavLink className="navlink" to="/about" >About</NavLink>
          <NavLink className="navlink" to="/home" >Home</NavLink>
        </div>

        <div className="main">
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/" element={<Navigate to="about"/>} />
          </Routes>
        </div>
      </div>
    )
  }
}

