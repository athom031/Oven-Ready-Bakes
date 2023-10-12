import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/order">Order</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>  
        </nav>
    </div>
  );
}

export default NavBar;