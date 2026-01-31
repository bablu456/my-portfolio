import Hero from './components/Hero';
import Projects from './components/Projects'; 
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;