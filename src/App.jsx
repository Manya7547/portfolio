import Header from './components/header/header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Qualification from './components/Qualification/Qualification';
import Portfolio from './components/Projects/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/Scrollup/ScrollUp';
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
