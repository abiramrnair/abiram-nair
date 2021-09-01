import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;
