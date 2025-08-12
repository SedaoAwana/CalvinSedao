"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Globe, Code, Users, MessageSquare, TrendingUp, Coffee, Zap, MapPin, Clock } from 'lucide-react';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const journeyStops = [
    { city: "Seattle", year: "Beginning", lesson: "Roots in Tech" },
    { city: "Bronx Couch", year: "2010s", lesson: "Hustle & Hunger" },
    { city: "Manhattan", year: "Success", lesson: "Making It" },
    { city: "LATAM", year: "2018-Now", lesson: "Building Bridges" },
    { city: "Ecuador", year: "Home", lesson: "Twins & New Perspective" }
  ];

  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "AI Engineering Teams",
      subtitle: "Senior LATAM talent that ships",
  description: "Pre-vetted engineers who&apos;ve been through the hype cycles and know what actually works",
      cta: "View Talent"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Reality Checks",
      subtitle: "Free coffee chats",
  description: "Let&apos;s talk about what you actually need vs. what you think you need",
      cta: "Book a Chat"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Speaking & Workshops",
      subtitle: "No fluff, just experience",
      description: "From crypto crashes to AI hype - lessons from the trenches",
      cta: "Book Me"
    }
  ];

  const stats = [
    { label: "Countries Lived", value: "5+", detail: "USA, Ecuador, Colombia, Peru, Mexico" },
    { label: "Startups Helped", value: "50+", detail: "Seed to Series B" },
    { label: "Engineers Placed", value: "200+", detail: "Across LATAM" },
    { label: "Hype Cycles Survived", value: "2", detail: "Crypto & AI" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md"></div>
            <span className="font-bold text-xl">Calvin • Startup Sensei</span>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#journey" className="hover:text-blue-600 transition">Journey</a>
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#insights" className="hover:text-blue-600 transition">Insights</a>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Let&apos;s Talk Reality
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Seattle → NYC → LATAM → Your Success
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              I went from a couch in the Bronx to building{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI teams across Latin America
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Let me help you build without the BS. I&apos;ve been through the crypto crash and AI hype. 
              I know what actually ships products and what&apos;s just expensive noise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center justify-center">
                Build Your Team
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-md hover:border-blue-600 hover:text-blue-600 transition">
                Get a Reality Check (Free)
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Journey</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Each stop taught me something about building teams, surviving hype, and what really matters in startups
          </p>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            {journeyStops.map((stop, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ opacity: scrollY > index * 100 ? 1 : 0.5, transition: 'opacity 0.5s' }}
              >
                <div className="flex-1"></div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>
                
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <h3 className="font-bold text-xl mb-1">{stop.city}</h3>
                    <p className="text-sm text-slate-500 mb-2">{stop.year}</p>
                    <p className="text-slate-700">{stop.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-900 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How I Can Help</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Skip the hype. Build what matters. I&apos;ve been on both sides of the table.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition cursor-pointer transform hover:-translate-y-1"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {service.icon}
                </div>
                
                <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{service.subtitle}</p>
                <p className="text-slate-600 mb-4">{service.description}</p>
                
                <button className={`flex items-center text-sm font-medium transition ${
                  activeCard === index ? 'text-blue-600' : 'text-slate-400'
                }`}>
                  {service.cta}
                  <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reality Check Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            The Reality Stack™
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Most startups get it backwards
          </h2>
          
          <div className="space-y-4 max-w-2xl mx-auto mb-12">
            <div className="bg-slate-800 p-4 rounded-lg text-left">
              <span className="text-red-400 font-medium">What you think you need:</span> AI everything, ML models, the latest framework
            </div>
            <div className="bg-slate-800 p-4 rounded-lg text-left">
              <span className="text-yellow-400 font-medium">What you actually need:</span> Great engineers who ship features users want
            </div>
            <div className="bg-slate-800 p-4 rounded-lg text-left">
              <span className="text-green-400 font-medium">How to get there efficiently:</span> LATAM talent + cultural bridge
            </div>
          </div>
          
          <button className="px-8 py-4 bg-white text-slate-900 rounded-md hover:bg-slate-100 transition font-medium">
            Let&apos;s Talk Reality (It&apos;s Free)
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to build something real?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            From Japanese discipline to LATAM passion. From Bronx hustle to Ecuador balance.
            <br />I bring worlds together to build teams that actually ship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-md hover:bg-slate-100 transition font-medium">
              Build Your Team
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white/10 transition font-medium">
              Book Speaking Engagement
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-white mb-2">Calvin • Startup Sensei</div>
              <p className="text-sm">Building bridges between cultures and code</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">Email</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm">
            <p>© 2024 Calvin. Made with efficiency and a touch of anime spirit. 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
