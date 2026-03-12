import { Instagram, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    <h2>NUAGE</h2>
                    <p>O refúgio perfeito em Fortaleza.</p>
                </div>

                <div className="footer-links">
                    <h4>Links Rápidos</h4>
                    <a href="/#unidades">Unidades</a>
                    <a href="/#sobre">Sobre o Nuage</a>
                    <a href="https://wa.link/u34xsp" target="_blank" rel="noopener noreferrer">Fale Conosco</a>
                    <a href="#">Trabalhe Conosco</a>
                </div>

                <div className="footer-social">
                    <h3>Contato</h3>
                    <div className="social-icons">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="https://wa.me/5585999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <Phone size={20} />
                        </a>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" aria-label="Maps">
                            <MapPin size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>NUAGE Motel © 2026 — Todos os direitos reservados. Discrição e privacidade em primeiro lugar.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
