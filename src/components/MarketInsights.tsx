import React from 'react';
import { TrendingUp, DollarSign, Clock, Percent } from 'lucide-react';

const MarketInsights = () => {
  const stats = [
    {
      id: 1,
      title: 'Average Luxury Home Price',
      value: '$2.1M',
      change: '+12%',
      icon: DollarSign,
    },
    {
      id: 2,
      title: 'Days on Market',
      value: '45',
      change: '-15%',
      icon: Clock,
    },
    {
      id: 3,
      title: 'Price per Sq Ft',
      value: '$285',
      change: '+8%',
      icon: TrendingUp,
    },
    {
      id: 4,
      title: 'Inventory Growth',
      value: '125',
      change: '+20%',
      icon: Percent,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Market Insights</h2>
        <p className="text-slate-600 mb-12">Stay informed about the College Station luxury real estate market</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-8 w-8 text-slate-900" />
                <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Market Report Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Growing Demand</h4>
              <p className="text-slate-300 mb-4">
                The luxury real estate market in College Station continues to show strong growth, driven by Texas A&M University's expansion and increasing corporate relocations to the area.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>• 25% increase in luxury home sales</li>
                <li>• Strong demand in Pebble Creek and South College Station</li>
                <li>• Rising interest from out-of-state buyers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Investment Opportunities</h4>
              <p className="text-slate-300 mb-4">
                College Station's luxury market offers compelling investment opportunities, with steady appreciation and strong rental demand in premium neighborhoods.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>• 8% average annual appreciation</li>
                <li>• High rental yields in luxury segments</li>
                <li>• New development opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;