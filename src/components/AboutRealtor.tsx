import React from 'react';
import { Award, Users, Home } from 'lucide-react';

const AboutRealtor = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
              alt="Lisa Bricker"
              className="rounded-lg shadow-xl w-full h-[600px] object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Lisa Bricker</h2>
            <p className="text-slate-600 mb-8">
              With over 15 years of experience in luxury real estate, Lisa Bricker has established herself as College Station's premier realtor for discerning clients. Her deep understanding of the local market, combined with her commitment to exceptional service, has earned her numerous accolades and a loyal client base.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-slate-900" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">Certified Luxury Home Marketing Specialist</h3>
                  <p className="text-slate-600">Specialized training in high-end property transactions</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-slate-900" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">500+ Satisfied Clients</h3>
                  <p className="text-slate-600">A proven track record of successful transactions</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Home className="h-6 w-6 text-slate-900" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">$500M+ in Sales</h3>
                  <p className="text-slate-600">Consistently ranked among top 1% of realtors</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Professional Affiliations</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• National Association of Realtors®</li>
                <li>• Texas Real Estate Commission</li>
                <li>• Institute for Luxury Home Marketing</li>
                <li>• Bryan-College Station Regional Association of Realtors®</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRealtor;