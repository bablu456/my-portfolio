import Hero from './components/Hero';
import Projects from './components/Projects'; 

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* We will add Navbar later */}
      <Hero />
      <Projects/>
      {/* We will add Projects/Contact later */}
    </div>
  );
}

export default App;