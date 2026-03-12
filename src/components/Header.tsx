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
                    NUAGE
                </Link>

                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Início</Link>
                    <a href="/#unidades" className="nav-link" onClick={() => setIsOpen(false)}>Unidades</a>
                    <a href="/#sobre" className="nav-link" onClick={() => setIsOpen(false)}>Experiência</a>
                    <a href="https://wa.link/u34xsp" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm header-btn" onClick={() => setIsOpen(false)}>
                        Agendar Agora
                    </a>
                </nav>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} color="#F3F4F6" /> : <Menu size={24} color="#F3F4F6" />}
                </button>
            </div>
        </header>
    );
};

export default Header;
