import './App.css';

import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Order from './components/Order/Order';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App;
