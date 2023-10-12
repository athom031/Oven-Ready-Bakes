import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
      // <Routes>
    //   <Route path="/" element={<App/>} />
    //   <Route path="/about" element={<About/>} />
    //   <Route path="/contact" element={<Contact/>} />
    //   <Route path="/menu" element={<Menu/>} />
    //   <Route path="/order" element={<Order/>} />
    // </Routes>

  //   <Router>
  //   <div className="App">
  //     <NavBar />
  //     <Routes>
  //       <Route path="/componenta" element={<ComponentA />} />
  //       <Route path="/componentb" element={<ComponentB />} />
  //     </Routes>
  //   </div>
  // </Router>
  // // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
