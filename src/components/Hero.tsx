import { ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    NUAGE Motel
                    <span className="hero-subtitle">O Refúgio Perfeito em Fortaleza</span>
                </h1>
                <p className="hero-description">
                    Suítes exclusivas, ambientes temáticos e conforto em cada detalhe.
                    Descubra o auge da sofisticação e privacidade.
                </p>
                <div className="hero-buttons">
                    <a href="#unidades" className="btn btn-primary">
                        Ver Unidades
                    </a>
                    <a href="https://wa.me/5585999999999" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        Conversar no WhatsApp <ChevronRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
