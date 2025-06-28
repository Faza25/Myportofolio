import './Index.css'
// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // <-- Import komponen Hero
import About from './components/About'; // <-- 1. Import komponen About
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; // <-- Import Contact
import Footer from './components/Footer';   // <-- Import Footer


function App() {
   return (
     <div className="bg-slate-900">
      <main>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
          <Contact /> 
        
        {/* Di sini nanti kita akan tambahkan komponen Project & Contact */}
      </main>
      <Footer />
    </div>
  )
}

export default App;
