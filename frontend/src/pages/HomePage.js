import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { mockData } from "../mock";
import { Wrench, Clock, Award, CheckCircle } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="section-container">
          <h1 className="display-md text-primary animate-in">
            Professional Printing Equipment Maintenance
          </h1>
          <p className="body-xl text-secondary" style={{ marginTop: '24px', marginBottom: '40px', maxWidth: '600px', margin: '24px auto 40px' }}>
            Save money and extend equipment life with Complex Print's expert maintenance services. 
            Trusted by major companies across industries.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/request-repair" className="btn-primary">
              Request Repair Service
            </Link>
            <button className="btn-secondary">
              Learn About Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-card)' }}>
        <div className="section-container">
          <h2 className="heading-1 text-primary text-center" style={{ marginBottom: '60px' }}>
            Our Services
          </h2>
          <div className="design-grid">
            {mockData.services.map((service, index) => (
              <div key={index} className="design-card">
                <div className="card-icon">
                  {service.icon === 'subscription' && <Clock size={32} color="white" />}
                  {service.icon === 'comprehensive' && <CheckCircle size={32} color="white" />}
                  {service.icon === 'onetime' && <Wrench size={32} color="white" />}
                </div>
                <h3 className="heading-3 text-primary" style={{ marginBottom: '16px' }}>
                  {service.title}
                </h3>
                <p className="body-md text-secondary">
                  {service.description}
                </p>
                <ul style={{ margin: '20px 0', padding: 0, listStyle: 'none' }}>
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{ margin: '8px 0', display: 'flex', alignItems: 'center' }}>
                      <CheckCircle size={16} color="var(--brand-green)" style={{ marginRight: '8px' }} />
                      <span className="body-sm text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Brands Section */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-page)' }}>
        <div className="section-container">
          <h2 className="heading-1 text-primary text-center" style={{ marginBottom: '40px' }}>
            Equipment We Service
          </h2>
          <p className="body-lg text-secondary text-center" style={{ marginBottom: '60px' }}>
            We specialize in laser printers and plotters from leading manufacturers
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '60px' }}>
            {mockData.equipmentBrands.map((brand, index) => (
              <div key={index} style={{ 
                background: 'var(--bg-card)', 
                padding: '32px', 
                borderRadius: '16px', 
                textAlign: 'center',
                border: '1px solid var(--border-light)',
                transition: 'all 0.3s ease'
              }} className="hover-lift">
                <h3 className="heading-4 text-primary">{brand.name}</h3>
                <p className="body-sm text-muted" style={{ margin: '8px 0' }}>
                  {brand.speciality}
                </p>
              </div>
            ))}
          </div>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '40px', 
            borderRadius: '16px', 
            border: '1px solid var(--border-light)',
            textAlign: 'center'
          }}>
            <h3 className="heading-3 text-primary" style={{ marginBottom: '16px', color: 'var(--brand-orange)' }}>
              Important Note
            </h3>
            <p className="body-lg text-secondary">
              We service <strong>laser printers and plotters only</strong>. 
              We do not repair inkjet printers.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-card)' }}>
        <div className="section-container">
          <h2 className="heading-1 text-primary text-center" style={{ marginBottom: '40px' }}>
            Trusted by Industry Leaders
          </h2>
          <p className="body-lg text-secondary text-center" style={{ marginBottom: '60px' }}>
            Our quality is confirmed by extensive experience serving large companies and 
            working in authorized service centers
          </p>
          <div className="design-grid">
            <div className="design-card">
              <div className="card-icon">
                <Award size={32} color="white" />
              </div>
              <h3 className="heading-3 text-primary" style={{ marginBottom: '16px' }}>
                Large Corporate Clients
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '20px' }}>
                {mockData.corporateClients.map((client, index) => (
                  <span key={index} style={{ 
                    background: 'var(--bg-subtle)', 
                    padding: '8px 16px', 
                    borderRadius: '24px',
                    fontSize: '14px',
                    color: 'var(--text-secondary)'
                  }}>
                    {client}
                  </span>
                ))}
              </div>
            </div>
            <div className="design-card">
              <div className="card-icon">
                <CheckCircle size={32} color="white" />
              </div>
              <h3 className="heading-3 text-primary" style={{ marginBottom: '16px' }}>
                Authorized Service Centers
              </h3>
              <p className="body-md text-secondary" style={{ marginBottom: '20px' }}>
                Experience gained from working in official service centers:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {mockData.serviceCenters.map((center, index) => (
                  <span key={index} style={{ 
                    background: 'rgba(0, 96, 52, 0.1)', 
                    color: 'var(--brand-green)',
                    padding: '8px 16px', 
                    borderRadius: '24px',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    {center}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-page)' }}>
        <div className="section-container text-center">
          <h2 className="heading-1 text-primary" style={{ marginBottom: '24px' }}>
            Ready to Get Your Equipment Fixed?
          </h2>
          <p className="body-lg text-secondary" style={{ marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Submit a repair request and our experienced technicians will diagnose 
            and fix your printing equipment quickly and professionally.
          </p>
          <Link to="/request-repair" className="btn-primary" style={{ fontSize: '18px', padding: '20px 40px' }}>
            Request Repair Service Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;