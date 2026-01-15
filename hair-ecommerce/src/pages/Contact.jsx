import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
    
      title: 'Email Us',
      details: 'support@hairboutique.com',
      description: 'We respond within 24 hours',
      color: 'purple'
    },
    {
   
      title: 'WhatsApp',
      details: '+1 (234) 567-8900',
      description: 'Instant support & orders',
      color: 'green'
    },
    {
    
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      description: 'Sat-Sun: 10AM-4PM EST',
      color: 'blue'
    }
  ];

  return (
    <section id="contact" className="contact-page">
      <div className="container">
        {/* Hero Section */}
        <div className="contact-hero">
          <h1 className="contact-title">
            Get In <span className="highlight">Touch</span>
          </h1>
          <p className="contact-subtitle">
            We're here to help with any questions about our premium hair extensions
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Methods */}
          <div className="contact-methods">
            <div className="methods-grid">
              {contactMethods.map((method, index) => (
                <div 
                  key={index} 
                  className={`method-card ${method.color}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="method-icon">{method.icon}</div>
                  <h3>{method.title}</h3>
                  <p className="method-details">{method.details}</p>
                  <p className="method-description">{method.description}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form-container" data-aos="fade-left" data-aos-delay="200">
            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you soon</p>
            </div>

            {submitSuccess && (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>We'll contact you within 24 hours. Thank you!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className={`contact-form ${submitSuccess ? 'hidden' : ''}`}>
              <div className="form-group">
                <div className="input-group">
               
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <div className="input-group">
               
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                  
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                 
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group textarea-group">
                  
                  <textarea
                    name="message"
                    placeholder="Your message here..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message →'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;