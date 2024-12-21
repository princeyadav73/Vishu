import React from 'react';
import { Home, PaintBucket, Sofa, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Space Planning',
    description: 'Optimize your living spaces with our expert space planning services.',
  },
  {
    icon: <PaintBucket className="h-8 w-8" />,
    title: 'Color Consultation',
    description: 'Create the perfect atmosphere with our professional color schemes.',
  },
  {
    icon: <Sofa className="h-8 w-8" />,
    title: 'Furniture Selection',
    description: 'Find the perfect pieces to complement your space and style.',
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Lighting Design',
    description: 'Enhance your space with carefully planned lighting solutions.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive interior design services to bring your vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}