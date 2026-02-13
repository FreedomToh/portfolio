import { Header } from './components/Header/Header.tsx'
import { Me } from './components/Me'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
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
