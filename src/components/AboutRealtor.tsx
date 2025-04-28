import React from 'react';
import { Award, Users, Home } from 'lucide-react';
import { ContainerScroll } from './ui/container-scroll-animation';
import { motion } from 'framer-motion';

const AboutRealtor = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Meet <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Michael Chandler
              </span>
            </h1>
          </>
        }
      >
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center h-full p-2 sm:p-4 md:p-6 overflow-y-auto"
          style={{
            transformOrigin: "center center"
          }}
        >
          <div className="h-full flex items-center justify-center p-2">
            <img
              src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Michael Chandler"
              className="rounded-lg shadow-xl w-full h-full max-h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-4 md:space-y-6 flex flex-col justify-start h-full overflow-y-auto">
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
              A dynamic and forward-thinking realtor, Michael Chandler brings a fresh perspective to luxury real estate in College Station. With his modern approach and deep understanding of the local market, Michael has quickly established himself as a trusted advisor for both first-time homebuyers and seasoned investors.
            </p>

            <div className="space-y-3 md:space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-slate-900" />
                </div>
                <div className="ml-3 md:ml-4">
                  <h3 className="text-base md:text-xl font-semibold text-slate-900">Rising Star Award Winner</h3>
                  <p className="text-sm md:text-base text-slate-600">Recognized for exceptional client service and market expertise</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-slate-900" />
                </div>
                <div className="ml-3 md:ml-4">
                  <h3 className="text-base md:text-xl font-semibold text-slate-900">200+ Happy Clients</h3>
                  <p className="text-sm md:text-base text-slate-600">Building lasting relationships through personalized service</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Home className="h-5 w-5 md:h-6 md:w-6 text-slate-900" />
                </div>
                <div className="ml-3 md:ml-4">
                  <h3 className="text-base md:text-xl font-semibold text-slate-900">$100M+ in Sales</h3>
                  <p className="text-sm md:text-base text-slate-600">Rapidly growing portfolio of successful transactions</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-3 md:p-6 rounded-lg">
              <h3 className="text-base md:text-xl font-semibold text-slate-900 mb-2 md:mb-3">Professional Affiliations</h3>
              <ul className="text-xs md:text-sm text-slate-600 space-y-1 md:space-y-2">
                <li>• National Association of Realtors®</li>
                <li>• Texas Real Estate Commission</li>
                <li>• Bryan-College Station Regional Association of Realtors®</li>
                <li>• Young Professionals Network</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </ContainerScroll>
    </div>
  );
};

export default AboutRealtor;