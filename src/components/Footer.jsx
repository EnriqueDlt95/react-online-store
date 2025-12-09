import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';


export default function Footer(){
  return (
    <footer className="nexus-footer">
      <div className="footer-container">
        
        {/* COLUMNA 1: MARCA Y DESCRIPCIÓN */}
        <div className="footer-column brand-col">
          <h3 className="footer-logo-text">NEXUS STORE</h3>
          <p className="footer-desc">
            Conectando el futuro contigo. La mejor tecnología, componentes y periféricos al alcance de un clic.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>

       

        {/* COLUMNA 3: SOPORTE Y LEGAL */}
        <div className="footer-column">
          <h4>Soporte</h4>
          <ul className="footer-links">
            <li><a href="#">Rastrea tu pedido</a></li>
            <li><a href="#">Preguntas Frecuentes</a></li>
            <li><a href="#">Garantías y Devoluciones</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Política de Privacidad</a></li>
          </ul>
        </div>

        {/* COLUMNA 4: CONTACTO */}
        <div className="footer-column contact-col">
          <h4>Contacto</h4>
          <div className="contact-item">
            <MapPin size={18} className="contact-icon" />
            <span></span>
          </div>
          <div className="contact-item">
            <Phone size={18} className="contact-icon" />
            <span>+52 (55)</span>
          </div>
          <div className="contact-item">
            <Mail size={18} className="contact-icon" />
            <span>contacto@nexusstore.com</span>
          </div>
        </div>

      </div>

      {/* BARRA INFERIOR DE COPYRIGHT */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nexus Store. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

