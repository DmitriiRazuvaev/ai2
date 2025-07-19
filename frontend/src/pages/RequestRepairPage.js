import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { mockData } from "../mock";
import { ArrowLeft, AlertCircle, CheckCircle2 } from "lucide-react";

const RequestRepairPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    equipmentBrand: '',
    equipmentModel: '',
    problemType: '',
    problemDescription: '',
    urgency: 'medium',
    serviceType: 'onetime'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds (mock behavior)
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: '',
        contactPerson: '',
        phone: '',
        email: '',
        equipmentBrand: '',
        equipmentModel: '',
        problemType: '',
        problemDescription: '',
        urgency: 'medium',
        serviceType: 'onetime'
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div>
        <Header />
        <section className="hero-section">
          <div className="section-container">
            <div style={{ 
              background: 'var(--bg-card)', 
              padding: '60px 40px', 
              borderRadius: '16px', 
              maxWidth: '600px', 
              margin: '0 auto',
              textAlign: 'center',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'var(--brand-green)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <CheckCircle2 size={40} color="white" />
              </div>
              <h1 className="heading-1 text-primary" style={{ marginBottom: '16px' }}>
                Request Submitted Successfully!
              </h1>
              <p className="body-lg text-secondary" style={{ marginBottom: '32px' }}>
                Thank you for your repair request. Our team will contact you within 2 business hours 
                to schedule a service appointment.
              </p>
              <Link to="/" className="btn-primary">
                Return to Homepage
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      
      {/* Header Section */}
      <section style={{ padding: '40px 24px 20px', background: 'var(--bg-page)' }}>
        <div className="section-container">
          <Link to="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '20px' }}>
            <ArrowLeft size={20} style={{ marginRight: '8px' }} />
            Back to Home
          </Link>
          <h1 className="heading-1 text-primary">
            Request Repair Service
          </h1>
          <p className="body-lg text-secondary" style={{ marginTop: '16px' }}>
            Fill out the form below and our expert technicians will contact you to schedule your equipment repair.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ padding: '40px 24px 80px', background: 'var(--bg-card)' }}>
        <div className="section-container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            {/* Alert Box */}
            <div style={{ 
              background: 'rgba(236, 72, 153, 0.1)', 
              border: '1px solid var(--brand-pink)',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '40px',
              display: 'flex',
              alignItems: 'flex-start'
            }}>
              <AlertCircle size={24} color="var(--brand-pink)" style={{ marginRight: '12px', marginTop: '2px' }} />
              <div>
                <h3 className="heading-4" style={{ color: 'var(--brand-pink)', marginBottom: '8px' }}>
                  Important Notice
                </h3>
                <p className="body-md text-secondary">
                  We service <strong>laser printers and plotters only</strong>. We do not repair inkjet printers. 
                  Please ensure your equipment is compatible before submitting this request.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
              
              {/* Company Information */}
              <h2 className="heading-3 text-primary" style={{ marginBottom: '24px' }}>
                Company Information
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="companyName">Company Name *</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="contactPerson">Contact Person *</label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Enter contact person name"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Equipment Information */}
              <h2 className="heading-3 text-primary" style={{ marginBottom: '24px' }}>
                Equipment Information
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="equipmentBrand">Equipment Brand *</label>
                  <select
                    id="equipmentBrand"
                    name="equipmentBrand"
                    value={formData.equipmentBrand}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select equipment brand</option>
                    {mockData.equipmentBrands.map((brand, index) => (
                      <option key={index} value={brand.name}>{brand.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="equipmentModel">Equipment Model</label>
                  <input
                    type="text"
                    id="equipmentModel"
                    name="equipmentModel"
                    value={formData.equipmentModel}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter equipment model (if known)"
                  />
                </div>
              </div>

              {/* Problem Information */}
              <h2 className="heading-3 text-primary" style={{ marginBottom: '24px' }}>
                Problem Information
              </h2>

              <div className="form-group">
                <label className="form-label" htmlFor="problemType">Problem Type *</label>
                <select
                  id="problemType"
                  name="problemType"
                  value={formData.problemType}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select problem type</option>
                  {mockData.commonProblems.map((problem, index) => (
                    <option key={index} value={problem.type}>{problem.type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="problemDescription">Detailed Problem Description</label>
                <textarea
                  id="problemDescription"
                  name="problemDescription"
                  value={formData.problemDescription}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="4"
                  placeholder="Please describe the problem in detail, including any error codes or specific symptoms"
                ></textarea>
              </div>

              {/* Service Preferences */}
              <h2 className="heading-3 text-primary" style={{ marginBottom: '24px' }}>
                Service Preferences
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="serviceType">Preferred Service Type</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="onetime">One-time Repair</option>
                    <option value="subscription">Subscription Service</option>
                    <option value="comprehensive">Comprehensive Service</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="urgency">Urgency Level</label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="low">Low - Within a week</option>
                    <option value="medium">Medium - Within 2-3 days</option>
                    <option value="high">High - Within 24 hours</option>
                    <option value="critical">Critical - Same day</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '18px', padding: '20px' }}>
                Submit Repair Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestRepairPage;