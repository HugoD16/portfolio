import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experiences from './pages/Experiences'
import Certifications from './pages/Certifications'
import Education from './pages/Education'
import Veille from './pages/Veille'
const Item = ({ to, icon, label }) => (
  <NavLink to={to} title={label} className={({isActive}) =>
    `flex items-center justify-center w-12 h-12 rounded-xl transition hover:scale-110 ${isActive ? 'bg-white text-primary shadow-soft' : 'bg-white/20 text-white'}`
  }>
    <span className="text-xl">{icon}</span>
  </NavLink>
)
export default function App(){
  return (
    <div className="min-h-screen flex bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500">
      <aside className="fixed left-0 top-0 bottom-0 w-20 bg-black/20 backdrop-blur-md flex flex-col items-center gap-4 pt-6">
        <Item to="/" icon="🏠" label="Accueil" />
        <Item to="/about" icon="👤" label="À propos" />
        <Item to="/skills" icon="💻" label="Compétences" />
        <Item to="/experiences" icon="📂" label="Expériences" />
        <Item to="/certifications" icon="🎓" label="Certifications" />
        <Item to="/education" icon="🧭" label="Parcours" />
        <Item to="/veille" icon="🧠" label="Veille IA" />
        <a href="/cv/CV_Hugo_Dehay.pdf" className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 text-white hover:scale-110 transition" title="CV PDF">📄</a>
      </aside>
      <div className="flex-1 ml-20 bg-ivory text-primary min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/education" element={<Education />} />
          <Route path="/veille" element={<Veille />} />
        </Routes>
      </div>
    </div>
  )
}
