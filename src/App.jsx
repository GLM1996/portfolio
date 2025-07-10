
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div className='max-w-[1280px] mx-auto p-4 md:p-8'>
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <ContactMe />
      </div>
      <Footer />
    </>
  )
}

export default App
