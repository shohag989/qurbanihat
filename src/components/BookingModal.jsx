'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import logo from '../assets/logo.svg';

export default function BookingModal({ animal, user, onClose }) {
  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Booking completed! We will contact you soon.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-primary p-8 text-center text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="flex justify-center mb-4">
            <img src={logo.src || logo} alt="QurbaniHat Logo" className="h-12 w-auto brightness-0 invert" />
          </div>
          <h2 className="text-2xl font-bold">Book Your Animal</h2>
          <p className="text-white/80 font-light mt-1">Complete the form to confirm your booking for {animal.name}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-charcoal flex items-center gap-2">
                <i className="fas fa-user text-primary/60"></i>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-cream rounded-2xl border border-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-charcoal flex items-center gap-2">
                <i className="fas fa-envelope text-primary/60"></i>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-cream rounded-2xl border border-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-charcoal flex items-center gap-2">
              <i className="fas fa-phone text-primary/60"></i>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-cream rounded-2xl border border-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
              placeholder="+880 1XXX XXXXXX"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-charcoal flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-primary/60"></i>
              Delivery Address
            </label>
            <textarea
              name="address"
              required
              rows="3"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-cream rounded-2xl border border-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none"
              placeholder="Your full delivery address..."
            ></textarea>
          </div>

          <div className="pt-2">
            <div className="flex items-center justify-between mb-6 p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <span className="text-gray-500 font-medium">Total Amount:</span>
              <span className="text-2xl font-bold text-primary">৳{animal.price.toLocaleString()}</span>
            </div>

            <button
              type="submit"
              className="w-full btn-primary !py-4 text-lg shadow-xl shadow-primary/20"
            >
              <i className="fas fa-check-circle mr-2"></i>
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
