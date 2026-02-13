import { Header } from './Pages/Landing/Header/Header.tsx'
import { Me } from './Pages/Landing/Me/Me.tsx'
import { About } from './Pages/Landing/About.tsx'
import { Experience } from './Pages/Landing/Experience.tsx'
import { Skills } from './Pages/Landing/Skills.tsx'
import { Contact } from './Pages/Landing/Contact.tsx'
import { Footer } from './Pages/Landing/Footer.tsx'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Me />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
