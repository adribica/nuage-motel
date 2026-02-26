import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo">
                    NUAGE <span className="logo-sparkle">✨</span>
                </Link>

                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Início</Link>
                    <a href="#unidades" className="nav-link" onClick={() => setIsOpen(false)}>Unidades</a>
                    <a href="#sobre" className="nav-link" onClick={() => setIsOpen(false)}>Sobre</a>
                    <a href="https://wa.me/5585999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Conversar no WhatsApp
                    </a>
                </nav>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} color="#CBA45E" /> : <Menu size={24} color="#CBA45E" />}
                </button>
            </div>
        </header>
    );
};

export default Header;
