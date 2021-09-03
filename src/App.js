import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Hero />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;
