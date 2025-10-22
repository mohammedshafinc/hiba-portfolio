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
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-text-primary mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Ready to take your brand to the next level?
          </p>
          <p className="text-text-secondary mt-4">
            My inbox is always open! You can contact me with the contact form here or with the details below:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-serif font-semibold">
                Contact Form
              </CardTitle>
            </CardHeader>
            <CardContent>
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

                  <Button type="submit" className="w-full bg-accent hover:bg-accent-warm text-white">
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
