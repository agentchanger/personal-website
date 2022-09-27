import './App.css';
import Blog from './Blog/Blog';
import Portfolio from './Portfolio/Portfolio';
import Navbar from './Navigation/Navbar';
import { BrowserRouter as Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
    </div>
  );
}

export default App;
