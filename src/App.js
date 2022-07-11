import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About'
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <ul className='nav-bar'>
        <Link className='home' to=''>Home</Link>
        <Link className='about' to='/about'>About</Link>
        <Link className='projects' to='/projects'>Projects</Link>
      </ul>
    
      <main>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
