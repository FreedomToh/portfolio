import { Header } from './Pages/Landing/Header/Header.tsx'
import { BaseInfo } from './Pages/Landing/BaseInfo/BaseInfo.tsx'
import { About } from './Pages/Landing/About/About.tsx'
import { Experience } from './Pages/Landing/Experience/Experience.tsx'
import { Skills } from './Pages/Landing/Skills/Skills.tsx'
import { Contact } from './Pages/Landing/Contacts/Contact.tsx'
import { Footer } from './Pages/Landing/Footer/Footer.tsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <BaseInfo />
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
