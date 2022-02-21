import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/Home'
import { TagsPage } from './pages/Tags'
import { ResultPage } from './pages/Result'
import { Follow } from './pages/Follow'

import './styles.scss'

import { Nav } from './components'

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
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </div>
        <div className="page-container__right">
          <Follow />
        </div>
      </Router>
    </div>
  )
}

export default App
