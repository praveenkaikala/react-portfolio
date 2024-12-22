import Navbar from './components/layout/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Toaster/>
    </div>
  );
}

export default App;