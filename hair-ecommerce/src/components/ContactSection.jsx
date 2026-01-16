import React, { useState } from 'react';
import './contact.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous errors when user starts typing
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Email Support',
      details: 'support@luxeby-mo.com',
      description: 'Response within 24 hours',
      color: 'purple'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'WhatsApp Chat',
      details: '+1 (234) 567-8900',
      description: 'Instant support & orders',
      color: 'green'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      description: 'Sat-Sun: 10AM-4PM EST',
      color: 'blue'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <div className="header-decoration">
            <svg width="80" height="2" viewBox="0 0 80 2" fill="none">
              <line x1="0" y1="1" x2="80" y2="1" stroke="#8a4baf" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="section-label">Contact Us</span>
            <svg width="80" height="2" viewBox="0 0 80 2" fill="none">
              <line x1="0" y1="1" x2="80" y2="1" stroke="#8a4baf" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          
          <h1 className="contact-title">
            Get In <span className="highlight">Touch</span>
          </h1>
          
          <p className="contact-subtitle">
            We're here to help with any questions about our premium hair extensions.
            Our team is always ready to assist you.
          </p>
        </div>

        <div className="contact-content">
          {/* Left Column - Contact Methods */}
          <div className="contact-info">
            <div className="info-cards">
              {contactMethods.map((method, index) => (
                <div 
                  key={index} 
                  className={`info-card ${method.color}`}
                >
                  <div className="card-icon">
                    {method.icon}
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{method.title}</h3>
                    <p className="card-details">{method.details}</p>
                    <p className="card-description">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="additional-info">
              <div className="info-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                        stroke="#8a4baf" strokeWidth="1.5"/>
                  <path d="M8 12L11 15L16 9" stroke="#8a4baf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Free consultation available</span>
              </div>
              
              <div className="info-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                        stroke="#8a4baf" strokeWidth="1.5"/>
                  <path d="M8 12L11 15L16 9" stroke="#8a4baf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Custom orders welcome</span>
              </div>
              
              <div className="info-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                        stroke="#8a4baf" strokeWidth="1.5"/>
                  <path d="M8 12L11 15L16 9" stroke="#8a4baf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Professional hair advice</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-wrapper">
            <div className="form-container">
              <div className="form-header">
                <h2 className="form-title">Send us a Message</h2>
                <p className="form-subtitle">
                  Fill out the form below and we'll get back to you soon
                </p>
              </div>

              {submitSuccess ? (
                <div className="success-state">
                  <div className="success-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                            stroke="#00b894" strokeWidth="2"/>
                      <path d="M8 12L11 15L16 9" stroke="#00b894" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="success-title">Message Sent Successfully!</h3>
                  <p className="success-message">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button 
                    className="back-to-form-btn"
                    onClick={() => setSubmitSuccess(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {submitError && (
                    <div className="error-message">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                              stroke="#ff4757" strokeWidth="2"/>
                        <path d="M12 8V12M12 16H12.01" stroke="#ff4757" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label className="input-label">
                        <span className="required">*</span> Full Name
                      </label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="form-input"
                          disabled={isSubmitting}
                        />
                        <div className="input-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" 
                                  stroke="#8a4baf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" 
                                  stroke="#8a4baf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="input-label">
                        <span className="required">*</span> Email Address
                      </label>
                      <div className="input-wrapper">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="form-input"
                          disabled={isSubmitting}
                        />
                        <div className="input-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
                                  stroke="#8a4baf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 6L12 13L2 6" stroke="#8a4baf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="input-label">Phone Number</label>
                      <div className="input-wrapper">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Optional"
                          className="form-input"
                          disabled={isSubmitting}
                        />
                        <div className="input-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M22 16.92V19.92C22.0002 20.1985 21.9182 20.4711 21.7636 20.7045C21.609 20.9379 21.3886 21.122 21.13 21.235C20.736 21.403 20.244 21.5 19.68 21.5C16.372 21.5 12.5 19.957 9.28 16.72C6.06 13.5 4.5 9.628 4.5 6.32C4.5 5.756 4.597 5.264 4.765 4.87C4.878 4.61144 5.06212 4.39103 5.29552 4.23642C5.52893 4.08181 5.80148 3.99979 6.08 4H9.08C9.448 4 9.784 4.224 9.904 4.572C10.067 5.038 10.286 5.632 10.544 6.28C10.656 6.56 10.616 6.878 10.436 7.122L8.828 9.322C9.824 11.458 11.54 13.176 13.678 14.172L15.878 12.564C16.122 12.384 16.44 12.344 16.72 12.456C17.368 12.714 17.962 12.933 18.428 13.096C18.776 13.216 19 13.552 19 13.92V16.92H22Z" 
                                  stroke="#8a4baf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="input-label">
                        <span className="required">*</span> Subject
                      </label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          className="form-input"
                          disabled={isSubmitting}
                        />
                        <div className="input-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" 
                                  stroke="#8a4baf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="input-label">
                      <span className="required">*</span> Your Message
                    </label>
                    <div className="input-wrapper">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your inquiry..."
                        className="form-textarea"
                        rows="5"
                        disabled={isSubmitting}
                      ></textarea>
                      <div className="textarea-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" 
                                stroke="#8a4baf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M17 8L12 3L7 8" stroke="#8a4baf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 3V15" stroke="#8a4baf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" 
                                  strokeDasharray="31.415, 31.415" strokeDashoffset="0">
                            <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" 
                                              dur="1s" repeatCount="indefinite"/>
                          </circle>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;