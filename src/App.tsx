import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import AuthForm from './components/AuthForm'
import Welcome from './components/Welcome'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App