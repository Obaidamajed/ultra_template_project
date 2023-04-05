import React, { Component } from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import './App.css'

import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Index from './Components/Index'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App