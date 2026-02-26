import Hero from '../components/Hero';
import UnitCard from '../components/UnitCard';
import { units } from '../data/units';
import { Star, Shield, Droplets, BedDouble, HeartHandshake, MapPin, Sparkles } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <>
            <Hero />

            {/* Units Section */}
            <section id="unidades" className="section">
                <div className="container">
                    <div className="section-header center">
                        <h2 className="section-title">Nossas Unidades</h2>
                        <p className="section-desc">
                            Encontre o NUAGE mais próximo de você em Fortaleza e região.
                        </p>
                    </div>

                    <div className="units-grid">
                        {units.slice(0, 3).map((unit) => (
                            <UnitCard key={unit.id} unit={unit} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Por que Nuage Section */}
            <section id="sobre" className="section bg-dark-glass">
                <div className="container">
                    <div className="why-grid">
                        <div className="why-text">
                            <h2 className="section-title">Por que NUAGE?</h2>
                            <p className="section-desc">
                                Criamos o padrão mais alto de excelência para quem busca diferenciação. O NUAGE é pensado aos mínimos detalhes para uma experiência impecável.
                            </p>
                        </div>
                        <div className="why-features">
                            <div className="feature-item">
                                <Shield className="feature-icon" size={24} />
                                <div>
                                    <h3>Privacidade</h3>
                                    <p>Sua identidade e momentos protegidos com discrição absoluta.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Droplets className="feature-icon" size={24} />
                                <div>
                                    <h3>Limpeza</h3>
                                    <p>Rigoroso padrão de higienização hospitalar em todas as suítes.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <BedDouble className="feature-icon" size={24} />
                                <div>
                                    <h3>Conforto</h3>
                                    <p>Camas king-size, lençóis premium e climatização ideal.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <HeartHandshake className="feature-icon" size={24} />
                                <div>
                                    <h3>Atendimento</h3>
                                    <p>Equipe treinada para acolher com educação e velocidade 24h.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <MapPin className="feature-icon" size={24} />
                                <div>
                                    <h3>Localização</h3>
                                    <p>Diversas opções estrategicamente posicionadas em Fortaleza.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Sparkles className="feature-icon" size={24} />
                                <div>
                                    <h3>Experiência</h3>
                                    <p>Cardápio refinado e controle total de iluminação e som.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galeria / Experiência */}
            <section className="section cinematic-gallery">
                <div className="gallery-row">
                    <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop" alt="Experiência 1" />
                    <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop" alt="Experiência 2" />
                    <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=600&auto=format&fit=crop" alt="Experiência 3" />
                    <img src="https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=600&auto=format&fit=crop" alt="Experiência 4" />
                </div>
                <div className="container center mt-4">
                    <a href="https://wa.me/5585999999999" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-pill btn-sm">
                        Falar no WhatsApp e reservar
                    </a>
                </div>
            </section>

            {/* Depoimentos */}
            <section className="section bg-dark-glass">
                <div className="container">
                    <h2 className="section-title center mb-large">O que dizem nossos clientes</h2>
                    <div className="reviews-grid">
                        <div className="review-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#A78BFA" color="#A78BFA" />)}
                            </div>
                            <p>"Atendimento excelente e suítes impecáveis. O melhor de Fortaleza!"</p>
                            <span className="review-author">— M.S, Fortaleza</span>
                        </div>
                        <div className="review-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#A78BFA" color="#A78BFA" />)}
                            </div>
                            <p>"Ambiente moderno e de extrema discrição. A experiência foi incrível."</p>
                            <span className="review-author">— C.R, Eusébio</span>
                        </div>
                        <div className="review-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#A78BFA" color="#A78BFA" />)}
                            </div>
                            <p>"Tudo perfeito! A suíte superou as expectativas. Volto em breve."</p>
                            <span className="review-author">— A.P, Fortaleza</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Localização */}
            <section className="section">
                <div className="container center">
                    <h2 className="section-title">Estamos perto de você</h2>
                    <p className="section-desc mb-4">
                        Com diversas unidades espalhadas por Fortaleza e região metropolitana, sempre tem um NUAGE pronto para recebê-lo.
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-pill">
                        Abrir no Google Maps
                    </a>
                </div>
            </section>

            {/* CTA Final */}
            <section className="cta-banner">
                <div className="container center cta-content">
                    <h2 className="cta-title">Pronto para viver a experiência NUAGE?</h2>
                    <p className="cta-desc">Chame no WhatsApp e veja disponibilidade nas nossas unidades.</p>
                    <a href="https://wa.me/5585999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-pill btn-lg mt-4">
                        Conversar no WhatsApp
                    </a>
                </div>
            </section>
        </>
    );
};

export default Home;
