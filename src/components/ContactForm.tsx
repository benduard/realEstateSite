import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Contact Lisa</h2>
            <p className="text-slate-600 mb-8">
              Ready to start your luxury home journey? Get in touch with Lisa Bricker for personalized assistance.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-slate-900 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Phone</h3>
                  <p className="text-slate-600">979-123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-6 w-6 text-slate-900 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">contact@lisabricker.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-slate-900 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Office</h3>
                  <p className="text-slate-600">123 Main Street, College Station, TX 77840</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Office Hours</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: By Appointment</li>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-slate-700 mb-2">
                    Interest
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500"
                    required
                  >
                    <option value="">Select Property Type</option>
                    <option value="luxury-home">Luxury Home</option>
                    <option value="estate">Estate</option>
                    <option value="investment">Investment Property</option>
                    <option value="land">Land</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-3 px-6 rounded-md hover:bg-slate-800 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;