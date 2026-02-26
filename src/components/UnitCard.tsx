import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Unit } from '../data/units';
import './UnitCard.css';

interface UnitCardProps {
    unit: Unit;
}

const UnitCard = ({ unit }: UnitCardProps) => {
    return (
        <div className="unit-card">
            <div className="unit-image-wrapper">
                <img src={unit.imageUrl} alt={unit.name} className="unit-image" loading="lazy" />
                <div className="unit-overlay">
                    <Link to={`/${unit.slug}`} className="btn btn-gold btn-sm">
                        Ver Suítes
                    </Link>
                </div>
            </div>
            <div className="unit-info">
                <h3>{unit.name}</h3>
                <p className="unit-desc">{unit.description}</p>
                <div className="unit-actions">
                    <a href={unit.locationUrl} target="_blank" rel="noopener noreferrer" className="location-link">
                        <MapPin size={16} /> Localização
                    </a>
                    <Link to={`/${unit.slug}`} className="details-link">
                        Detalhes <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UnitCard;
