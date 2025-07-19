import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const location = useLocation();

  return (
    <header className="design-header">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Complex Print
        </Link>
        
        <nav className="nav-menu">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'text-green' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/request-repair" 
            className={`nav-link ${location.pathname === '/request-repair' ? 'text-green' : ''}`}
          >
            Request Repair
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft: '16px' }}>
            <a href="tel:+7-XXX-XXX-XX-XX" className="btn-icon" title="Call us">
              <Phone size={20} />
            </a>
            <a href="mailto:info@complexprint.ru" className="btn-icon" title="Email us">
              <Mail size={20} />
            </a>
          </div>
          <Link to="/request-repair" className="btn-primary">
            Get Service
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;