import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import BookingModal from '../components/BookingModal';
import { AnimalDetailSkeleton } from '../components/Skeleton';

export default function AnimalDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    fetch('/animals.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(a => a.id === parseInt(id));
        setAnimal(found);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading animal:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main className="bg-white min-h-screen pb-20">
        <div className="bg-gradient-to-b from-cream to-white pt-8 pb-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="w-32 h-8 bg-gray-100 rounded-lg animate-pulse"></div>
          </div>
        </div>
        <AnimalDetailSkeleton />
      </main>
    );
  }

  if (!animal) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-2xl mb-4">Animal not found</p>
          <button onClick={() => navigate(-1)} className="btn-primary">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleBook = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    setShowBookingModal(true);
  };

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal 
          animal={animal} 
          user={user} 
          onClose={() => setShowBookingModal(false)} 
        />
      )}
      {/* Breadcrumb / Back Button */}
      <div className="bg-gradient-to-b from-cream to-white pt-8 pb-4">
        <div className="max-w-6xl mx-auto px-4">
          <button 
            onClick={() => navigate(-1)} 
            className="group flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-medium"
          >
            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <i className="fas fa-arrow-left text-xs"></i>
            </div>
            Back to Catalog
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Images */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] md:aspect-auto md:h-[400px] lg:h-[500px]">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6">
                <span className="px-6 py-2 bg-primary/90 backdrop-blur-md text-white rounded-full text-sm font-bold shadow-xl border border-white/20">
                  {animal.category}
                </span>
              </div>
            </div>
            
            <div className="bg-cream/30 p-6 md:p-8 rounded-[2rem] border border-gray-100">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <i className="fas fa-info-circle text-primary"></i>
                About this Animal
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                {animal.description}
              </p>
            </div>
          </div>

          {/* Right Column: Details & Booking */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-lg text-primary text-xs font-bold uppercase tracking-widest mb-4">
                  <i className="fas fa-certificate"></i>
                  Verified Healthy
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 leading-tight">{animal.name}</h1>
                <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                  <i className="fas fa-map-marker-alt text-primary/60"></i>
                  <span className="text-lg font-light">{animal.location}, Bangladesh</span>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-gray-50">
                <div className="mb-8 text-center md:text-left">
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Fixed Price</span>
                  <div className="flex items-baseline justify-center md:justify-start gap-2 mt-1">
                    <span className="text-5xl font-bold text-primary">৳{animal.price.toLocaleString()}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-cream rounded-2xl border border-primary/5 group hover:bg-white hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <i className="fas fa-weight-hanging"></i>
                    </div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Weight</p>
                    <p className="text-lg font-bold text-charcoal">{animal.weight} kg</p>
                  </div>
                  <div className="p-4 bg-cream rounded-2xl border border-primary/5 group hover:bg-white hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <i className="fas fa-calendar-alt"></i>
                    </div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Age</p>
                    <p className="text-lg font-bold text-charcoal">{animal.age} Years</p>
                  </div>
                  <div className="p-4 bg-cream rounded-2xl border border-primary/5 group hover:bg-white hover:shadow-lg transition-all col-span-2">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <i className="fas fa-dna"></i>
                    </div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Breed Type</p>
                    <p className="text-lg font-bold text-charcoal">{animal.breed}</p>
                  </div>
                </div>

                <button
                  onClick={handleBook}
                  className="w-full btn-primary !py-5 text-xl shadow-xl shadow-primary/20"
                >
                  <i className="fas fa-shopping-cart mr-2"></i>
                  {user ? 'Book This Animal' : 'Login to Book'}
                </button>
                
                <p className="text-center text-gray-400 text-xs mt-6 font-medium">
                  <i className="fas fa-shield-alt mr-1"></i>
                  Secure payment & farm verification guaranteed
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 px-4">
                <div className="text-center">
                  <div className="text-primary/40 text-2xl mb-2">
                    <i className="fas fa-vial"></i>
                  </div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Tested</p>
                </div>
                <div className="text-center border-x border-gray-100">
                  <div className="text-primary/40 text-2xl mb-2">
                    <i className="fas fa-truck"></i>
                  </div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Delivery</p>
                </div>
                <div className="text-center">
                  <div className="text-primary/40 text-2xl mb-2">
                    <i className="fas fa-headset"></i>
                  </div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}