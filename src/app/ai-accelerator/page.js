"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Zap, Users, Clock, CheckCircle, ArrowRight, Star, Target, Rocket } from 'lucide-react';

const AIAcceleratorPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    {
      question: "Is this really free?",
      answer: "Yes, completely free. No hidden costs or fees. Our AI Skills Accelerator students provide 3 months of development support at zero cost to selected companies."
    },
    {
      question: "What kind of AI projects can you help with?",
      answer: "We enhance existing products with AI features like chatbots, recommendation systems, predictive analytics, automation, and data analysis. We focus on adding AI capabilities to your current systems."
    },
    {
      question: "Do I need to have technical knowledge?",
      answer: "No, our students handle the technical implementation. You just need to commit 2-3 hours per week for collaboration, feedback, and removing any blockers."
    },
    {
      question: "How many companies do you select?",
      answer: "We select 1-2 companies per cohort for the 3-month program. This ensures each company gets dedicated attention and support from our student teams."
    },
    {
      question: "What if I need a full MVP built?",
      answer: "For core MVP development or building primary business functionality from scratch, please contact Calvin@awana.io directly. This program focuses on enhancing existing products with AI."
    },
    {
      question: "What&apos;s the time commitment required?",
      answer: "Selected companies commit 2-3 hours per week for 3 months. This includes progress check-ins, answering questions, providing feedback, and removing any blockers for the students."
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Zero Cost",
      description: "Completely free AI development support"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Students",
      description: "Trained AI developers from our accelerator"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "3-Month Support",
      description: "Extended development period for results"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Product Enhancement",
      description: "AI integration for existing systems"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Apply",
      description: "Fill out the form below (5 minutes)",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      step: "2",
      title: "Selection",
      description: "We review applications and select 1-2 companies",
      icon: <Star className="w-5 h-5" />
    },
    {
      step: "3",
      title: "Onboarding",
      description: "Meet your student team and plan the project",
      icon: <Users className="w-5 h-5" />
    },
    {
      step: "4",
      title: "Development",
      description: "3 months of AI development and integration",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      step: "5",
      title: "Launch",
      description: "Deploy AI enhancements to your product",
      icon: <Zap className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md"></div>
            <span className="font-bold text-xl text-gray-900">Calvin • Startup Sensei</span>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link href="/#journey" className="text-gray-700 hover:text-blue-600 transition">Journey</Link>
            <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Let&apos;s Talk Reality
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              AI Skills Accelerator Program
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FREE AI Development</span> for Your Startup
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Selected companies receive 3 months of AI development support from our AI Skills Accelerator students—completely free. Enhance your existing products with cutting-edge AI capabilities.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <a href="#apply" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-medium text-lg">
              Apply Now - Limited Spots Available
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The AI Challenge for Startups
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 text-sm font-bold">×</span>
                  </div>
                  <p className="text-gray-700">High development costs ($50K+ for AI projects)</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 text-sm font-bold">×</span>
                  </div>
                  <p className="text-gray-700">Difficulty finding qualified AI developers</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 text-sm font-bold">×</span>
                  </div>
                  <p className="text-gray-700">Uncertain ROI on AI investments</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 text-sm font-bold">×</span>
                  </div>
                  <p className="text-gray-700">Complex integration with existing systems</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Solution
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Free AI development from trained students</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Structured 3-month development cycle</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Focus on enhancing existing products</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Proven AI implementation frameworks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What You Get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI Skills Accelerator provides comprehensive support to enhance your existing products with AI capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">3 Months of AI Development</h3>
              <p className="text-gray-700">Extended support period to ensure your AI features are properly implemented and integrated.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Dedicated Student Team</h3>
              <p className="text-gray-700">Multiple developers working on your project with guidance from experienced mentors.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">AI Strategy Consultation</h3>
              <p className="text-gray-700">Help organizing your data and approach for maximum AI implementation success.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Product Enhancement</h3>
              <p className="text-gray-700">AI features for existing systems like chatbots, recommendations, and automation.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-700">Regular check-ins and progress updates throughout the development process.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Proven Frameworks</h3>
              <p className="text-gray-700">Tested AI implementation approaches that have worked for other companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 5-step process from application to AI-enhanced product launch.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1"></div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white rounded-full z-10 shadow-lg hidden md:flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mr-3 text-blue-600">
                          {step.icon}
                        </div>
                        <h3 className="font-bold text-xl text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Previous AI Accelerator Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our students have helped companies transform their products with AI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                <span className="text-2xl font-bold">23%</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">E-commerce Platform</h3>
              <p className="text-gray-700 mb-4">Increased conversion rates by 23% with AI-powered product recommendations.</p>
              <div className="text-sm text-gray-500">AI Recommendation Engine</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <span className="text-2xl font-bold">80%</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">SaaS Company</h3>
              <p className="text-gray-700 mb-4">Automated 80% of customer support inquiries with AI chatbots.</p>
              <div className="text-sm text-gray-500">AI Chatbot Integration</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                <span className="text-2xl font-bold">35%</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Manufacturing Startup</h3>
              <p className="text-gray-700 mb-4">Optimized operations and reduced costs by 35% with predictive analytics.</p>
              <div className="text-sm text-gray-500">Predictive Analytics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="apply" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Apply for Free AI Development
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Take the first step toward AI-powered growth. Complete this 5-minute application to be considered for our AI Skills Accelerator program.
          </p>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Important Note</h3>
              <p className="text-gray-700">
                This program enhances existing products/processes with AI. We don&apos;t build core MVPs or primary business functionality. 
                If you need a prototype or an MVP, please contact <a href="mailto:Calvin@awana.io" className="text-blue-600 hover:underline">Calvin@awana.io</a>.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <iframe 
                className="airtable-embed" 
                src="https://airtable.com/embed/appvmcZQnUUIyaSyV/pagK4QOBrr7xkiPoz/form" 
                frameBorder="0" 
                width="100%" 
                height="533" 
                style={{ background: 'transparent', border: '1px solid #ccc' }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our AI Skills Accelerator program.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition"
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${activeFAQ === index ? 'rotate-90' : ''}`} />
                </button>
                {activeFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don&apos;t Miss This Opportunity
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            AI is transforming industries. Don&apos;t let your startup fall behind. Apply now for free AI development support and stay ahead of the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#apply" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-medium">
              Apply Now - Limited Spots Available
            </a>
            <a href="mailto:Calvin@awana.io" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition font-medium">
              Contact for MVP Development
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-white mb-2">Calvin • Startup Sensei</div>
              <p className="text-sm">Building bridges between cultures and code</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="mailto:Calvin@awana.io" className="hover:text-white transition">Email</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© 2024 Calvin. Made with efficiency and a touch of anime spirit. 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIAcceleratorPage;

