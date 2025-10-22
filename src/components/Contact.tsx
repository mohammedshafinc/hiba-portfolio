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
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-cream-100">
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-sand-400"></span>
            <span className="mx-4 text-sand-500">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-sand-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink-800 mb-4">
            Let's Work Together
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sand-400 via-sand-500 to-sand-400 mx-auto mb-6"></div>
          <p className="text-lg text-ink-500 max-w-2xl mx-auto mb-2">
            Have a project in mind or need compelling content?
          </p>
          <p className="text-ink-500">
            I'd love to hear from you. Let's create something remarkable together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card className="bg-white border-sand-200 shadow-elegant">
            <CardHeader className="border-b border-sand-200">
              <CardTitle className="text-2xl font-serif font-semibold text-ink-800">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-green-600 text-lg font-medium mb-2">
                    Message successfully sent!
                  </div>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <div className="text-xs text-muted-foreground mb-4">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a> and{' '}
                    <a href="#" className="text-primary hover:underline">Terms of Service</a> apply.
                  </div>

                  <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
                    Send
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-semibold text-text-primary mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Email</h4>
                  <a
                    href="mailto:hibanazarp@gmail.com"
                    className="text-black hover:text-black transition-colors duration-200"
                  >
                    hibanazarp@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h4 className="font-serif font-semibold text-foreground mb-3">
                  hiba
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
