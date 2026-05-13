import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { units } from '../data/units';
import { Check, ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './UnitPage.css';

const UnitPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const unit = units.find(u => u.slug === slug);

    const [galleryOpen, setGalleryOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!unit) {
        return <Navigate to="/" replace />;
    }

    const openGallery = (images: string[] | undefined, defaultImage: string | undefined) => {
        const imgs = images && images.length > 0 ? images : (defaultImage ? [defaultImage] : []);
        if (imgs.length > 0) {
            setCurrentImages(imgs);
            setCurrentIndex(0);
            setGalleryOpen(true);
            document.body.style.overflow = 'hidden';
        }
    };

    const closeGallery = () => {
        setGalleryOpen(false);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % currentImages.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    };

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
                                <div 
                                    className="suite-image gallery-trigger" 
                                    style={{ backgroundImage: `url(${suite.imageUrl})` }}
                                    onClick={() => openGallery(suite.images, suite.imageUrl)}
                                >
                                    {(suite.images && suite.images.length > 1) && (
                                        <div className="gallery-badge">
                                            Ver mais fotos
                                        </div>
                                    )}
                                </div>
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

            {galleryOpen && currentImages.length > 0 && (
                <div className="gallery-modal" onClick={closeGallery}>
                    <button className="gallery-close" onClick={closeGallery}><X size={32} /></button>
                    {currentImages.length > 1 && (
                        <>
                            <button className="gallery-nav prev" onClick={prevImage}><ChevronLeft size={48} /></button>
                            <button className="gallery-nav next" onClick={nextImage}><ChevronRight size={48} /></button>
                        </>
                    )}
                    <img 
                        src={currentImages[currentIndex]} 
                        alt="Suite gallery" 
                        className="gallery-img"
                        onClick={(e) => e.stopPropagation()} 
                    />
                    {currentImages.length > 1 && (
                        <div className="gallery-counter">
                            {currentIndex + 1} / {currentImages.length}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default UnitPage;
