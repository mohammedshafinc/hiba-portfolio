'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const phoneNumber = '9544282003';
    const message = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n\n*Message:*\n${formData.message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-cyan-50 via-sky-50 to-violet-50 relative overflow-hidden">
      {/* Colorful background accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-25 -z-10"></div>
      
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500 to-sky-500"></span>
            <span className="mx-4 text-cyan-600 text-2xl">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent via-violet-500 to-indigo-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-cyan-600 via-sky-600 to-violet-600 bg-clip-text text-transparent mb-4">
            Let's Work Together
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 via-sky-500 via-violet-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto mb-2">
            Have a project in mind or need compelling content?
          </p>
          <p className="text-ink-600">
            I'd love to hear from you. Let's create something remarkable together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card className="bg-white border-2 border-cyan-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="border-b-2 border-cyan-100 bg-gradient-to-r from-cyan-50 to-sky-50">
              <CardTitle className="text-2xl font-serif font-semibold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-emerald-600 text-lg font-medium mb-2">
                    Message successfully sent!
                  </div>
                  <p className="text-ink-600">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-ink-700 font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-ink-700 font-medium">Email *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-ink-700 font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="text-xs text-ink-500 mb-4">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a href="#" className="text-cyan-600 hover:text-cyan-700 hover:underline font-medium">Privacy Policy</a> and{' '}
                    <a href="#" className="text-cyan-600 hover:text-cyan-700 hover:underline font-medium">Terms of Service</a> apply.
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-700 hover:to-violet-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Send
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-semibold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-ink-700 mb-2">Email</h4>
                  <a
                    href="mailto:parambadenhiba@gmail.com"
                    className="text-cyan-600 hover:text-violet-600 transition-colors duration-200 font-medium"
                  >
                   parambadenhiba@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-cyan-50 to-violet-50 border-2 border-cyan-200 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-serif font-semibold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent mb-3">
                  hiba
                </h4>
                <p className="text-ink-600 text-sm leading-relaxed">
                  Digital author and copywriter specializing in creating compelling content 
                  that drives engagement and conversions across various industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
