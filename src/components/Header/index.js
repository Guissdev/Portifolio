import { Link } from 'react-router-dom';
import './header.css';
import About from '../../pages/About';
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';




const Header = () => {

    return (
        <header>
            <nav className='cabecalho'>
                <ul className='navi'>
                    <li className='itens'>guilherme-santos</li>
                    <li className='itens'><Link to="/" className="link" element={<Home />}>_hello</Link></li>
                    <li className='itens'><Link to="/about" className="link" element={<About />}>_sobre-mim</Link></li>
                    <li className='itens'><Link to="/projects" className="link" element={<Projects />}>_projetos</Link></li>
                    <li className='itens'><Link to="/contact" className="link" element={<Contact />}>_contato</Link></li>
                </ul>
            </nav>      
        </header >
    )
}

export default Header;