import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of hair do you sell?",
      answer: "We specialize in 100% human hair extensions including Brazilian, Peruvian, Malaysian, Indian, and Mongolian hair in various textures like straight, curly, body wave, deep wave, and kinky straight.",
    },
    {
      question: "Is the hair 100% human hair?",
      answer: "Yes! All our hair extensions are 100% virgin human hair. We do not sell synthetic hair or blends. Each bundle is carefully selected for quality, texture, and longevity.",
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days within the US. Express shipping (2-3 days) is available at checkout. International shipping takes 7-14 business days depending on the destination.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn, unwashed hair in its original packaging. Custom orders and installed hair are not eligible for returns. Contact our support team for return authorization.",
    },
    {
      question: "Can I color or bleach the hair?",
      answer: "Our virgin hair can be colored, but we recommend consulting a professional stylist. Avoid bleaching more than 2 levels lighter than the original color to maintain hair integrity.",
    },
    {
      question: "How do I choose the right length?",
      answer: "Consider your desired look and hair type. 16-18 inches for shoulder length, 20-22 inches for mid-back, 24-26 inches for waist length. Our length guide on product pages can help you decide.",
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-number"></span>
                <span className="faq-text">{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {activeIndex === index && (
                <div className="faq-answer">
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;