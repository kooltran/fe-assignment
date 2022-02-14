import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { HomePage } from './pages/Home'
import { TagsPage } from './pages/Tags'

import './styles.scss'

import { Button, TextBox, Slider, Nav } from './components'

function App() {
  return (
    <div className="page-container">
      <Router>
        <div className="page-container__left">
          <Nav />
        </div>
        <div className="page-container__center">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/tags" element={<TagsPage />} />
          </Routes>
        </div>
        <div className="page-container__right">Follower</div>
      </Router>
    </div>
  )
}

export default App
