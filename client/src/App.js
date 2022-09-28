import './App.css';
import { Routes, Route } from 'react-router-dom';
import Blog from './Components/Blog/Blog'
import Frontpage from './Components/Frontpage/Frontpage';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navigation/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';

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

      <div className='footer'>
        <h1>This is footer</h1>
      </div>
      
    </div>
  );
}

export default App;
