import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MessageCircle, Star, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section ref={contactRef} className="relative py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Ready to Launch?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's create a brand that's truly out of this world
          </p>
        </div>

        <div className="relative">
          {/* Floating cosmic elements around the form */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 -left-5 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

          <form onSubmit={handleSubmit} className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/70 transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/70 transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/70 transition-all"
                  placeholder="Your startup name"
                />
              </div>
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type *
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/70 transition-all"
                >
                  <option value="">Select project type</option>
                  <option value="brand-identity">Complete Brand Identity</option>
                  <option value="logo-design">Logo Design</option>
                  <option value="visual-system">Visual System</option>
                  <option value="brand-strategy">Brand Strategy</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Project Description *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/70 transition-all resize-none"
                placeholder="Tell us about your startup, your vision, and what kind of brand identity you're looking for..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-bold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center mx-auto"
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Launch Your Brand
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
              </button>
            </div>

            {/* Form decoration elements */}
            <div className="absolute top-4 right-4 opacity-30">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </form>
        </div>

        {/* Additional info section */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 rounded-xl bg-gray-900/20 border border-gray-800/50">
            <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="font-bold text-white mb-2">Quick Response</h3>
            <p className="text-gray-400 text-sm">We'll get back to you within 24 hours</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-900/20 border border-gray-800/50">
            <MessageCircle className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <h3 className="font-bold text-white mb-2">Free Consultation</h3>
            <p className="text-gray-400 text-sm">Initial strategy session at no cost</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-900/20 border border-gray-800/50">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-bold text-white mb-2">Stellar Results</h3>
            <p className="text-gray-400 text-sm">Brands that reach for the stars</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;