import Hero from '../components/Hero';
import UnitCard from '../components/UnitCard';
import { units } from '../data/units';
import { Star } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <>
            <Hero />

            {/* About Section - Transparent bg over image */}
            <section id="sobre" className="section section-bg-image"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2000&auto=format&fit=crop")' }}>
                <div className="container about-container">
                    <div className="about-text">
                        <h2 className="section-title text-purple">Sobre o NUAGE</h2>
                        <p className="section-desc text-dark">
                            O NUAGE Motel é referência em conforto e privacidade em Fortaleza, com diversas unidades estrategicamente localizadas.
                            Cada suíte foi criada para proporcionar momentos inesquecíveis, com design moderno e detalhes únicos.
                        </p>
                    </div>
                    <div className="about-grid">
                        <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=600&auto=format&fit=crop" alt="Interior Nuage" className="about-img main-img" />
                        <div className="about-grid-small">
                            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=400&auto=format&fit=crop" alt="Detalhe Nuage" className="about-img" />
                            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400&auto=format&fit=crop" alt="Ambiente Nuage" className="about-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Units Section */}
            <section id="unidades" className="section">
                <div className="container">
                    <div className="section-header center">
                        <h2 className="section-title text-dark">Nossas Unidades</h2>
                        <p className="section-desc text-muted">
                            Encontre o NUAGE mais próximo de você em Fortaleza e região.
                        </p>
                    </div>

                    <div className="units-grid">
                        {units.map((unit) => (
                            <UnitCard key={unit.id} unit={unit} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section - Parallax Champagne Effect */}
            <section className="section bg-purple text-white section-bg-image"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1598555981504-d41ae645934e?q=80&w=2000&auto=format&fit=crop")' }}>
                <div className="container">
                    <h2 className="section-title center text-white mb-large">O que dizem nossos clientes</h2>
                    <div className="reviews-slider">
                        <div className="review-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#a855f7" color="#a855f7" />)}
                            </div>
                            <p>"Atendimento excelente e suítes impecáveis. Com certeza voltarei!"</p>
                            <span className="review-author">- Maria S.</span>
                        </div>
                        <div className="review-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#a855f7" color="#a855f7" />)}
                            </div>
                            <p>"Ambiente limpo, moderno e discreto. A experiência foi incrível."</p>
                            <span className="review-author">- Carlos M.</span>
                        </div>
                        <div className="review-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#a855f7" color="#a855f7" />)}
                            </div>
                            <p>"Simplesmente perfeito! A suíte com hidro é fantástica."</p>
                            <span className="review-author">- Ana Paula</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pre-Footer CTA */}
            <section className="section bg-gold cta-section">
                <div className="container center">
                    <h2 className="cta-title">Pronto para viver momentos únicos?</h2>
                    <p className="cta-desc">Reserve sua suíte agora mesmo e garanta uma experiência inesquecível</p>
                    <a href="https://wa.me/5585999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                        Conversar no WhatsApp
                    </a>
                </div>
            </section>
        </>
    );
};

export default Home;
