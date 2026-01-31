import Hero from './components/Hero';
import Projects from './components/Projects'; 
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects/>
    </div>
  );
}

export default App;