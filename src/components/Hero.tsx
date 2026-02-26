import { MessageCircle, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    NUAGE Motel
                    <span className="hero-subtitle">O refúgio perfeito em Fortaleza</span>
                </h1>

                <p className="hero-description">
                    Suítes exclusivas, privacidade total e conforto em cada detalhe.
                </p>

                <div className="hero-buttons">
                    <a href="https://wa.me/5585999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-pill cta-main">
                        <MessageCircle size={20} className="mr-2" />
                        Conversar no WhatsApp
                    </a>
                    <a href="#unidades" className="btn btn-secondary btn-pill">
                        Ver Unidades
                    </a>
                </div>

                <div className="hero-trust-badges">
                    <div className="badge">
                        <ShieldCheck size={18} />
                        <span>Discrição total</span>
                    </div>
                    <div className="badge">
                        <Sparkles size={18} />
                        <span>Ambientes temáticos</span>
                    </div>
                    <div className="badge">
                        <Clock size={18} />
                        <span>Reserva rápida</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
