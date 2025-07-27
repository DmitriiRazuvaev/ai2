import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Printer } from "lucide-react";

const Header = () => {
  const location = useLocation();

  return (
    <header className="design-header">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
            <Printer size={18} />
          </div>
          Complex Print
        </Link>
        
        <nav className="nav-menu">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'text-purple' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/request-repair" 
            className={`nav-link ${location.pathname === '/request-repair' ? 'text-purple' : ''}`}
          >
            Request Repair
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft: '16px' }}>
            <a href="tel:+79104297686" className="btn-icon" title="Call us">
              <Phone size={20} />
            </a>
            <a href="mailto:9104297686@outlook.com" className="btn-icon" title="Email us">
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