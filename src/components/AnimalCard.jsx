import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import BookingModal from './BookingModal';

export default function AnimalCard({ animal }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleBookClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      navigate('/login');
      return;
    }
    setShowBookingModal(true);
  };

  return (
    <>
      {showBookingModal && (
        <BookingModal 
          animal={animal} 
          user={user} 
          onClose={() => setShowBookingModal(false)} 
        />
      )}
      <Link 
        to={`/animal/${animal.id}`}
        className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
      >
        {/* Image Section */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={animal.image}
            alt={animal.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1542462262-97b9c2671a9c?q=80&w=1000';
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Status Badges */}
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-lg border border-white/20 ${
              animal.category.includes('Large') 
                ? 'bg-primary/90 text-white' 
                : 'bg-accent/90 text-white'
            }`}>
              {animal.category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-primary transition-colors line-clamp-1">
            {animal.name}
          </h3>

          {/* Attributes List */}
          <div className="space-y-2.5 mb-5 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Type:</span>
              <span className="text-charcoal font-semibold">{animal.type}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Breed:</span>
              <span className="text-charcoal font-semibold">{animal.breed}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Weight:</span>
              <span className="text-charcoal font-semibold">{animal.weight} kg</span>
            </div>
            <div className="flex items-center gap-2 pt-1 text-gray-400">
              <i className="fas fa-map-marker-alt text-primary/60 text-xs"></i>
              <span className="text-xs">{animal.location}</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-auto pt-4 border-t border-gray-50 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Price</span>
                <span className="text-xl font-bold text-primary">
                  ৳{animal.price.toLocaleString()}
                </span>
              </div>
              
              <div className="text-primary text-sm font-bold group-hover:underline">
                View Details
              </div>
            </div>
            
            <button
              onClick={handleBookClick}
              className="w-full py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-light transition-all shadow-md hover:shadow-primary/20 active:scale-95 flex items-center justify-center gap-2"
            >
              <i className="fas fa-shopping-cart text-[10px]"></i>
              Book Now
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}