import React from 'react'
import '../styles/App.css'
import { Application } from '../views/Application'
import { Checklist } from '../views/Checklist'
import { Diagrams } from '../views/Diagrams'
import { Competitive } from '../views/Competitive'
import { Home } from '../views/Home'
import { References } from '../views/References'
import { Research } from '../views/Research'
import { Validation } from '../views/Validation'
import { Budget } from '../views/Budget'
import { Awards } from '../views/Awards'
import { LetterRubric } from '../views/LetterRubric'
import { LettersInternal } from '../views/LettersInternal'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

export const App: React.FC = () => {
  const base = import.meta.env.BASE_URL || '/'
  return (
    <BrowserRouter basename={base}>
      <div>
        <nav className="nav-container">
          <div className="nav container">
            <NavLink className="logo" to="/" aria-label="PolicyEngine Home">
              <img src={`${base}assets/policyengine-logo.svg`} alt="PolicyEngine" />
            </NavLink>
            <ul className="nav-links">
              <li><NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink></li>
              <li><NavLink to="/application" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Application</NavLink></li>
              <li><NavLink to="/checklist" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Checklist</NavLink></li>
              <li><NavLink to="/diagrams" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Diagrams</NavLink></li>
              <li><NavLink to="/budget" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Budget</NavLink></li>
              <li><NavLink to="/competitive" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Competitive</NavLink></li>
              <li><NavLink to="/awards" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Awards</NavLink></li>
              <li><NavLink to="/validation" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Validation</NavLink></li>
              <li><NavLink to="/research" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Research</NavLink></li>
              <li><NavLink to="/references" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>References</NavLink></li>
            </ul>
          </div>
        </nav>
        <main className="page">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/application" element={<Application />} />
              <Route path="/checklist" element={<Checklist />} />
              <Route path="/diagrams" element={<Diagrams />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/competitive" element={<Competitive />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/validation" element={<Validation />} />
              <Route path="/research" element={<Research />} />
              <Route path="/references" element={<References />} />
              <Route path="/rubric" element={<LetterRubric />} />
              <Route path="/letters-internal" element={<LettersInternal />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}
