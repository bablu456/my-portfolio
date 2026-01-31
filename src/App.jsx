import Hero from './components/Hero';
import Projects from './components/Projects'; 
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <Projects/>
    </div>
  );
}

export default App;