import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://formspree.io/f/mnnvlqkl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harshanofficial05@gmail.com',
      href: 'mailto:harshanofficial05@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8754143611',
      href: 'tel:+918754143611'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Erode, Tamil Nadu, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/iamshriharshan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shri-harshan/', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Discord' }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-purple-500/4 to-cyan-500/4 rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-cyan-500/4 to-purple-500/4 rounded-full blur-3xl animate-breathe" style={{animationDelay: '6s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-72 h-48 md:h-72 bg-gradient-to-r from-pink-500/3 to-indigo-500/3 rounded-full blur-3xl animate-breathe" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 card-hover cursor-default">
            Get In <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-cyan-300 transition-all duration-[1500ms]">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto hover:text-gray-200 transition-all duration-[1200ms] cursor-default">
            Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary together.
          </p>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6 animate-pulse hover:w-32 hover:h-2 transition-all duration-[1500ms]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Enhanced Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 hover:text-purple-300 transition-all duration-[1200ms] cursor-default">Let's Start a Conversation</h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 hover:text-gray-200 transition-all duration-[1200ms] cursor-default">
                Whether you have a project in mind, need security consultation, or want to collaborate 
                on innovative AI solutions, I'm always excited to connect with fellow creators and innovators.
              </p>
            </div>

            {/* Enhanced Contact Details */}
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center space-x-4 p-4 md:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-xl card-hover overflow-hidden"
                  >
                    <div className="w-12 md:w-14 h-12 md:h-14 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-[1400ms]">
                      <Icon className="w-6 md:w-7 h-6 md:h-7 text-white group-hover:scale-110 transition-all duration-[1200ms]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-all duration-[1200ms]">{info.label}</div>
                      <div className="text-white font-medium group-hover:text-purple-300 transition-all duration-[1200ms] text-sm md:text-base">
                        {info.value}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms] rounded-xl"></div>
                  </a>
                );
              })}
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 hover:text-purple-300 transition-all duration-[1200ms] cursor-default">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 card-hover overflow-hidden"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 md:w-6 h-5 md:h-6 icon-hover relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms] rounded-xl"></div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 md:p-8 card-hover overflow-hidden">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 hover:text-purple-300 transition-all duration-[1200ms] cursor-default">Send Me a Message</h3>
                
                {/* Enhanced Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3 animate-slide-up card-hover">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-300">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3 animate-slide-up card-hover">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-300">Failed to send message. Please try again or contact me directly.</span>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 hover:text-gray-100 transition-all duration-[1200ms] cursor-default">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-[1400ms]"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 hover:text-gray-100 transition-all duration-[1200ms] cursor-default">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-[1400ms]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 hover:text-gray-100 transition-all duration-[1200ms] cursor-default">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-[1400ms]"
                    placeholder="Let's work together!"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 hover:text-gray-100 transition-all duration-[1200ms] cursor-default">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-[1400ms] resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl btn-3d disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 icon-hover" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms]"></div>
                </button>
                
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 opacity-0 hover:opacity-100 transition-opacity duration-[1500ms] rounded-2xl pointer-events-none"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;