import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ContextData } from './context/ContextProvider.jsx'
import { GlobalStyles } from './global-styles/GlobalStyles.js'

import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Skills from './components/skills/Skills.jsx'
import Projects from './components/projects/Projects.jsx'
import PersonalProjects from './components/personal-projects/PersonalProjects.jsx'

function App() {

  const { theme } = useContext(ContextData)

  return (
    <div>
      <BrowserRouter>
        <GlobalStyles theme={theme}/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/personal-projects" element={<PersonalProjects />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App