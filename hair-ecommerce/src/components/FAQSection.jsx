import React, { useState } from 'react';
import './faq.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of hair do you offer?",
      answer: "We specialize in premium 100% human hair extensions including Brazilian, Peruvian, Malaysian, and Mongolian hair. Available in various textures: straight, curly, body wave, deep wave, and kinky straight.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 4C8 4 4 8 4 12C4 16 8 20 12 20C16 20 20 16 20 12C20 8 16 4 12 4Z" 
                stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M8 9C9 8 10 8 11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M13 9C14 8 15 8 16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M9 13C9 14 10 15 12 15C14 15 15 14 15 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      category: "Product"
    },
    {
      question: "Is the hair 100% human hair?",
      answer: "Absolutely! We only sell 100% virgin human hair. No synthetic blends. Each bundle is meticulously selected for quality, natural texture, and durability. Our hair maintains its luster and strength through multiple installs.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      category: "Quality"
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping: 3-5 business days within the US. Express shipping (2-3 days) available at checkout. International: 7-14 business days. All orders include tracking and insurance for your peace of mind.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V13" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V8" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M4 8L12 13L20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      category: "Shipping"
    },
    {
      question: "What is your return policy?",
      answer: "30-day return policy for unworn, unwashed hair in original packaging. Custom orders and installed hair are final sale. Contact support@luxeby-mo.com for return authorization and instructions.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 12V18M9 15H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      category: "Policy"
    },
    {
      question: "Can I color or bleach the hair?",
      answer: "Our virgin hair can be colored professionally. We recommend consulting a stylist. Avoid bleaching more than 2 levels lighter. Always perform a strand test first and use quality hair products to maintain integrity.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" 
                stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      category: "Care"
    },
    {
      question: "How do I choose the right length?",
      answer: "16-18 inches: shoulder length, 20-22 inches: mid-back, 24-26 inches: waist length. Visit our length guide on product pages for visual references and styling suggestions based on your hair type and desired look.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19M12 5L8 9M12 5L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 19H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      category: "Selection"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        {/* Header */}
        <div className="faq-header">
          <div className="header-decoration">
            <svg width="60" height="2" viewBox="0 0 60 2" fill="none">
              <line x1="0" y1="1" x2="60" y2="1" stroke="#8a4baf" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="section-label">Need Help?</span>
            <svg width="60" height="2" viewBox="0 0 60 2" fill="none">
              <line x1="0" y1="1" x2="60" y2="1" stroke="#8a4baf" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          
          <h2 className="faq-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          
          <p className="faq-subtitle">
            Find answers to common questions about our premium hair extensions, 
            shipping policies, and care instructions.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <div className="question-content">
                  <div className="question-icon">
                    {faq.icon}
                  </div>
                  <div className="question-text">
                    <h3 className="question-title">{faq.question}</h3>
                    <span className="question-category">{faq.category}</span>
                  </div>
                </div>
                
                <div className="question-toggle">
                  <svg 
                    className="toggle-icon" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path 
                      d="M6 9L12 15L18 9" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              
              <div className={`faq-answer ${activeIndex === index ? 'expanded' : ''}`}>
                <div className="answer-content">
                  <p className="answer-text">{faq.answer}</p>
                  {index === 3 && (
                    <div className="answer-note">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                              stroke="#8a4baf" strokeWidth="2"/>
                        <path d="M12 8V12M12 16H12.01" stroke="#8a4baf" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span>Need help with returns? Contact our support team</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="faq-cta">
          <div className="cta-content">
            <div className="cta-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" 
                      stroke="#8a4baf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 8L12 3L7 8" stroke="#8a4baf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3V15" stroke="#8a4baf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="cta-text">
              <h3 className="cta-title">Still have questions?</h3>
              <p className="cta-description">
                Can't find what you're looking for? Our support team is here to help.
              </p>
            </div>
            <button 
              className="cta-button"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Support
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;