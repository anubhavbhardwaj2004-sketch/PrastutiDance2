import React, { useState } from 'react';
import { ArrowRight, CheckCircle, CreditCard, Banknote } from 'lucide-react';
import './Admission.css';

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    service: 'Dance',
    paymentMode: 'QR Code'
  });

  const feeAmount = 1500;
  const ownerWhatsAppNumber = '918882867685'; // With country code

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentSelect = (mode) => {
    setFormData(prev => ({ ...prev, paymentMode: mode }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    if(!formData.name || !formData.phone || !formData.age) {
        alert("Please fill all the required details.");
        return;
    }

    // Generate WhatsApp Message
    const text = `*New Admission Request at Prastuti Dance Studio!* 🌟\n\n` +
                 `*Student Name:* ${formData.name}\n` +
                 `*Age:* ${formData.age}\n` +
                 `*Contact:* ${formData.phone}\n` +
                 `*Selected Service:* ${formData.service}\n\n` +
                 `*Bill Details*\n` +
                 `Fee Amount: ₹${feeAmount}\n` +
                 `Payment Method Option: ${formData.paymentMode}\n\n` +
                 `Please confirm the admission. Thank you!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${ownerWhatsAppNumber}?text=${encodedText}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="admission-page">
      <div className="admission-hero">
          <div className="overlay"></div>
          <h1 className="hero-title pt-title">Join <span className="text-gradient-accent font-script">Prastuti</span></h1>
          <p className="hero-subtitle">Begin your journey of rhythm and wellness today.</p>
      </div>

      <section className="form-section section-padding">
        <div className="container">
          <div className="admission-grid">
            
            {/* Form Column */}
            <div className="form-col glass-card">
              <h2 className="form-title">Enrollment Form</h2>
              <form onSubmit={handleSubmit} className="admission-form">
                
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" required />
                </div>
                
                <div className="form-row">
                  <div className="input-group flex-1">
                    <label>Age</label>
                    <input type="number" name="age" value={formData.age} onChange={handleInputChange} placeholder="e.g. 21" required />
                  </div>
                  <div className="input-group flex-2">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="10-digit mobile number" required />
                  </div>
                </div>

                <div className="input-group">
                  <label>Select Course</label>
                  <div className="select-wrapper">
                      <select name="service" value={formData.service} onChange={handleInputChange}>
                        <option value="Dance">Dance Class</option>
                        <option value="Yoga">Yoga Session</option>
                        <option value="Zumba">Zumba Fitness</option>
                        <option value="Wedding Dance">Wedding Dance Choreography</option>
                      </select>
                  </div>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  Send Bill via WhatsApp <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                </button>
              </form>
            </div>

            {/* Billing Column */}
            <div className="billing-col glass-card billing-card">
              <div className="bill-header">
                <h2>Fee Details</h2>
                <div className="fee-badge">₹{feeAmount}</div>
              </div>
              
              <ul className="bill-includes">
                <li><CheckCircle size={18} color="var(--accent-green)"/> Access to chosen class format</li>
                <li><CheckCircle size={18} color="var(--accent-green)"/> Professional guidance</li>
                <li><CheckCircle size={18} color="var(--accent-green)"/> Studio facilities access</li>
              </ul>

              <div className="payment-options-section">
                <h3>Select Payment Mode</h3>
                <div className="payment-toggle">
                  <div 
                    className={`pay-box ${formData.paymentMode === 'QR Code' ? 'active' : ''}`}
                    onClick={() => handlePaymentSelect('QR Code')}
                  >
                    <CreditCard size={24} />
                    <span>UPI / QR</span>
                  </div>
                  <div 
                    className={`pay-box ${formData.paymentMode === 'Cash' ? 'active' : ''}`}
                    onClick={() => handlePaymentSelect('Cash')}
                  >
                    <Banknote size={24} />
                    <span>Cash</span>
                  </div>
                </div>

                {formData.paymentMode === 'QR Code' ? (
                  <div className="qr-section slide-down">
                    <p className="qr-instruct">Scan using PhonePe, GPay, or Paytm</p>
                    <div className="qr-code-box">
                      {/* Using a placeholder QR from API */}
                      <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=UPI_ID:prastuti@okicici&color=050505&bgcolor=ffffff`} alt="Payment QR Code" />
                    </div>
                    <p className="qr-note">Complete payment and send the receipt on WhatsApp along with your form.</p>
                  </div>
                ) : (
                  <div className="cash-section slide-down">
                    <div className="cash-icon-wrapper">
                        <Banknote size={40} color="var(--accent-green)" />
                    </div>
                    <p>Please pay the cash amount at the studio reception during your first visit.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default Admission;
