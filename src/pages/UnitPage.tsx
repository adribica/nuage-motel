import { useParams, Navigate } from 'react-router-dom';
import { units } from '../data/units';
import { Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './UnitPage.css';

const UnitPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const unit = units.find(u => u.slug === slug);

    if (!unit) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="unit-page">
            <div className="unit-hero" style={{ backgroundImage: `url(${unit.imageUrl})` }}>
                <div className="container">
                    <Link to="/" className="back-link"><ArrowLeft size={20} /> Voltar</Link>
                    <h1 className="unit-title">{unit.name}</h1>
                    <p className="unit-hero-desc">{unit.description}</p>
                </div>
            </div>

            <div className="container unit-content">
                <div className="suites-grid">
                    {unit.suites.map((suite, index) => (
                        <div key={index} className="suite-card">
                            {suite.imageUrl && (
                                <div className="suite-image" style={{ backgroundImage: `url(${suite.imageUrl})` }}></div>
                            )}
                            <h3 className="suite-name">{suite.name}</h3>
                            <div className="suite-prices">
                                {suite.priceCheckIn && (
                                    <div className="price-item">
                                        <span className="price-label">Período</span>
                                        <span className="price-value">{suite.priceCheckIn}</span>
                                    </div>
                                )}
                                <div className="price-item highlight">
                                    <span className="price-label">Pernoite</span>
                                    <span className="price-value">{suite.priceOvernight}</span>
                                </div>
                            </div>
                            <ul className="suite-features">
                                {suite.features.map((feature, idx) => (
                                    <li key={idx}><Check size={16} color="#7e22ce" /> {feature}</li>
                                ))}
                            </ul>
                            <a href="https://wa.link/u34xsp"
                                target="_blank" rel="noopener noreferrer" className="btn btn-primary full-width">
                                Reservar esta Suíte
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default UnitPage;
