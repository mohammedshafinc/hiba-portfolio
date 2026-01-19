'use client';

import { useState, useRef, useEffect } from 'react';
import { Mail, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = '9544282003';
    const message = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n\n*Message:*\n${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section ref={sectionRef} id="contact" className="section-padding bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/30 to-transparent"></div>
      
      {/* Gradient orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[var(--accent-primary)] rounded-full blur-[200px] opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-accent"></div>
              <span className="text-[var(--accent-primary)] text-sm font-semibold uppercase tracking-[0.2em]">
                Contact
              </span>
            </div>
            
            <h2 className="text-[var(--text-primary)] mb-6">
              Let's Create<br />
              <span className="text-gradient font-editorial italic">Together</span>
            </h2>
            
            <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-md">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life through compelling content.
            </p>

            {/* Contact methods */}
            <div className="space-y-6">
              <a 
                href="mailto:parambadenhiba@gmail.com" 
                className="group flex items-center gap-4 p-4 bg-[var(--bg-card)] border border-white/5 hover:border-[var(--accent-primary)]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] mb-1">Email</p>
                  <p className="text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    parambadenhiba@gmail.com
                  </p>
                </div>
              </a>

              <a 
                href="https://wa.me/9544282003" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-[var(--bg-card)] border border-white/5 hover:border-[var(--accent-primary)]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] mb-1">WhatsApp</p>
                  <p className="text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    +91 954 428 2003
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-[var(--bg-card)] border border-white/5 p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[var(--accent-primary)]/10 flex items-center justify-center">
                    <Send className="w-8 h-8 text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Message Sent!</h3>
                  <p className="text-[var(--text-secondary)]">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-white/10 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-white/10 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-white/10 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="w-full btn-primary">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
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

export default Contact;
