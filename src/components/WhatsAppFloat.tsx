import { Phone } from 'lucide-react';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
    return (
        <a
            href="https://wa.me/5585999999999?text=Olá, gostaria de mais informações sobre as suítes."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Fale conosco no WhatsApp"
        >
            <div className="whatsapp-icon-wrapper">
                <Phone size={28} className="whatsapp-icon" fill="currentColor" />
            </div>
            <div className="whatsapp-tooltip">Fale Conosco</div>
        </a>
    );
};

export default WhatsAppFloat;
