import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. James Anderson',
      role: 'Texas A&M Professor',
      content: 'Lisa\'s expertise in the College Station luxury market is unmatched. She helped us find our dream home in Pebble Creek and made the entire process seamless.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      name: 'Sarah Thompson',
      role: 'Local Business Owner',
      content: 'Working with Lisa was an absolute pleasure. Her attention to detail and market knowledge helped us secure our investment property at the perfect price.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Tech Executive',
      content: 'Lisa\'s understanding of luxury properties and negotiation skills are exceptional. She helped us sell our home above asking price in just two weeks.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Client Testimonials</h2>
        <p className="text-slate-600 mb-12 text-center">What our clients say about their experience</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">{testimonial.name}</h3>
                  <p className="text-slate-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-slate-600 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;