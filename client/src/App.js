import './App.css';
import { Routes, Route } from 'react-router-dom';
import Blog from './Blog/Blog'
import Frontpage from './Frontpage/Frontpage';
import Navbar from './Navigation/Navbar';
import Portfolio from './Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>

      <Routes>
        <Route path="/" element={<Frontpage/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
