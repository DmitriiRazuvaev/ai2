import React from "react";
import { Phone, Mail, MapPin, Clock, Printer } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--text-primary)', 
      color: 'white', 
      padding: '60px 24px 40px' 
    }}>
      <div className="section-container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '40px', 
          marginBottom: '40px' 
        }}>
          
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Printer size={20} color="white" />
              </div>
              <h3 style={{ 
                fontSize: '24px', 
                fontWeight: '700', 
                color: 'white', 
                margin: 0
              }}>
                Complex Print
              </h3>
            </div>
            <p style={{ 
              lineHeight: '1.6', 
              marginBottom: '20px', 
              color: '#B0B0B0' 
            }}>
              Professional maintenance services for printing equipment. 
              Save money and extend your equipment's lifespan with our expert technicians.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <Phone size={16} style={{ marginRight: '12px', color: '#EC4899' }} />
              <a href="tel:+7-XXX-XXX-XX-XX" style={{ color: 'white', textDecoration: 'none' }}>
                +7 (XXX) XXX-XX-XX
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <Mail size={16} style={{ marginRight: '12px', color: '#EC4899' }} />
              <a href="mailto:info@complexprint.ru" style={{ color: 'white', textDecoration: 'none' }}>
                info@complexprint.ru
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <MapPin size={16} style={{ marginRight: '12px', color: '#EC4899', marginTop: '2px' }} />
              <span style={{ color: '#B0B0B0' }}>
                Moscow, Russia<br />
                Service area: Moscow and surrounding regions
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '20px',
              color: 'white'
            }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{ color: '#B0B0B0', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Subscription Service
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{ color: '#B0B0B0', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Comprehensive Maintenance
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{ color: '#B0B0B0', textDecoration: 'none', transition: 'color 0.2s' }}>
                  One-time Repairs
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{ color: '#B0B0B0', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Preventive Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Equipment Brands */}
          <div>
            <h4 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '20px',
              color: 'white'
            }}>
              Equipment We Service
            </h4>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '8px' 
            }}>
              {['HP', 'Canon', 'Kyocera', 'Konica Minolta', 'Xerox', 'Ricoh'].map((brand, index) => (
                <span key={index} style={{ 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  padding: '6px 12px', 
                  borderRadius: '16px',
                  fontSize: '14px',
                  color: '#B0B0B0'
                }}>
                  {brand}
                </span>
              ))}
            </div>
            <p style={{ 
              color: '#EC4899', 
              fontSize: '14px', 
              marginTop: '16px',
              fontWeight: '500'
            }}>
              ⚠️ Laser printers and plotters only. We do not service inkjet printers.
            </p>
          </div>

          {/* Working Hours */}
          <div>
            <h4 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '20px',
              color: 'white'
            }}>
              Working Hours
            </h4>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
              <Clock size={16} style={{ marginRight: '12px', color: '#EC4899', marginTop: '2px' }} />
              <div>
                <div style={{ marginBottom: '8px', color: '#B0B0B0' }}>
                  <strong style={{ color: 'white' }}>Monday - Friday:</strong> 9:00 - 18:00
                </div>
                <div style={{ marginBottom: '8px', color: '#B0B0B0' }}>
                  <strong style={{ color: 'white' }}>Saturday:</strong> 10:00 - 16:00
                </div>
                <div style={{ color: '#B0B0B0' }}>
                  <strong style={{ color: 'white' }}>Sunday:</strong> Closed
                </div>
              </div>
            </div>
            <p style={{ 
              color: '#8B5CF6', 
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Emergency repairs available 24/7 for subscription clients
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ 
          borderTop: '1px solid #333', 
          paddingTop: '30px', 
          textAlign: 'center' 
        }}>
          <p style={{ 
            margin: 0, 
            color: '#888', 
            fontSize: '14px' 
          }}>
            © 2025 Complex Print. All rights reserved. Professional printing equipment maintenance services in Moscow and regions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;