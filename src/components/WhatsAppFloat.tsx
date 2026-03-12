import { MessageCircle } from 'lucide-react';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
    return (
        <a
            href="https://wa.link/u34xsp"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Contato via WhatsApp"
        >
            <MessageCircle size={28} />
        </a>
    );
};

export default WhatsAppFloat;
