import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Publications from './pages/Publications'
import Team from './pages/Team'
import News from './pages/News'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path=":locale">
          <Route index element={<PageLayout><Home/></PageLayout>} />
          <Route path="about" element={<PageLayout><About/></PageLayout>} />
          <Route path="research" element={<PageLayout><Research/></PageLayout>} />
          <Route path="publications" element={<PageLayout><Publications/></PageLayout>} />
          <Route path="team" element={<PageLayout><Team/></PageLayout>} />
          <Route path="news" element={<PageLayout><News/></PageLayout>} />
          <Route path="contact" element={<PageLayout><Contact/></PageLayout>} />
        </Route>
        <Route path="*" element={<div className="container py-12">Page not found</div>} />
      </Routes>
    </div>
  )
}

function PageLayout({ children }){
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="container flex-grow py-8 md:py-12">{children}</main>
      <Footer />
    </div>
  )
}
