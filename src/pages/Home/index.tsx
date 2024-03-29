import Button from '../../core/components/Button';
import {Link} from 'react-router-dom';
import './style.css';

const Home = () => {
    return (

        <div className="container">
            <h1>Desafio do Capítulo 3, <br />
                Bootcamp DevSuperior
            </h1>
            <p>Bem-vindos ao desafio do Bootcamp DevSuperior.</p>
            <p>
                Este design foi adaptado a partir de Ant Design System for Figma,
                de <br /> Mateusz Wierzbicki: <a href="mailto:antforfigma@gmail.com">antforfigma@gmail.com</a>
            </p>
            
            <Link to="/search">
                <Button text="Começar" />
            </Link>

        </div>
        
    );
}

export default Home;