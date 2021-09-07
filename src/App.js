import './App.css';
import { useState } from 'react';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  const [toggle, setToggle] = useState(false);    
    const setMode = () => {
      toggle ? setToggle(false) : setToggle(true);
      !toggle ? document.body.classList.add("nightmode") : document.body.classList.remove("nightmode");
  }
  return (
    <div className="App">
      <Hero toggle={setMode} nightmode={toggle}/>
      <Portfolio nightmode={toggle}/>
      <About nightmode={toggle}/>
    </div>
  );
}

export default App;
