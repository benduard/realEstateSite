import React from 'react';
import { Award, Users, Home } from 'lucide-react';
import { ContainerScroll } from './ui/container-scroll-animation';

const AboutRealtor = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-5xl font-semibold text-black dark:text-white">
              Meet <br />
              <span className="text-5xl md:text-[7rem] font-bold mt-1 leading-none">
                Michael Chandler
              </span>
            </h1>
          </>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full p-8">
          <div className="h-full flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Michael Chandler"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-8 flex flex-col justify-center h-full">
            <p className="text-slate-600 text-xl leading-relaxed">
              A dynamic and forward-thinking realtor, Michael Chandler brings a fresh perspective to luxury real estate in College Station. With his modern approach and deep understanding of the local market, Michael has quickly established himself as a trusted advisor for both first-time homebuyers and seasoned investors.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Award className="h-8 w-8 text-slate-900" />
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-semibold text-slate-900">Rising Star Award Winner</h3>
                  <p className="text-slate-600 text-lg">Recognized for exceptional client service and market expertise</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Users className="h-8 w-8 text-slate-900" />
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-semibold text-slate-900">200+ Happy Clients</h3>
                  <p className="text-slate-600 text-lg">Building lasting relationships through personalized service</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Home className="h-8 w-8 text-slate-900" />
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-semibold text-slate-900">$100M+ in Sales</h3>
                  <p className="text-slate-600 text-lg">Rapidly growing portfolio of successful transactions</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Professional Affiliations</h3>
              <ul className="text-slate-600 space-y-3 text-lg">
                <li>• National Association of Realtors®</li>
                <li>• Texas Real Estate Commission</li>
                <li>• Bryan-College Station Regional Association of Realtors®</li>
                <li>• Young Professionals Network</li>
              </ul>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
};

export default AboutRealtor;