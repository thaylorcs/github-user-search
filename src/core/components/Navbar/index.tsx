import './style.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link to="/"><h4>BootCamp DevSuperior</h4></Link>
            </div>
        </nav>
    );
}

export default Navbar;