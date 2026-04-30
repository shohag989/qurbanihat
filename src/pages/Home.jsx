import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import AnimalCard from '../components/AnimalCard';
import { AnimalCardSkeleton } from '../components/Skeleton';
import CountUp from '../components/CountUp';
import heroImage from '../assets/HeroRightAnimals.png';

export default function Home() {
  const [featuredAnimals, setFeaturedAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch animals from public JSON file
    setLoading(true);
    fetch('/animals.json')
      .then(res => res.json())
      .then(data => {
        setFeaturedAnimals(data.slice(0, 4)); // Get first 4 for featured
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading animals:', err);
        setLoading(false);
      });
  }, []);

  const tips = [
    {
      id: 1,
      icon: 'fa-check-circle',
      title: 'Choose a Healthy Animal',
      description: 'Look for active, well-fed animals with clear eyes and good condition.'
    },
    {
      id: 2,
      icon: 'fa-balance-scale',
      title: 'Check Age & Weight',
      description: 'Verify the animal meets Qurbani requirements for age and weight standards.'
    },
    {
      id: 3,
      icon: 'fa-handshake',
      title: 'Confirm Trusted Seller',
      description: 'Book from verified farms with proven track record and customer reviews.'
    },
    {
      id: 4,
      icon: 'fa-calendar-check',
      title: 'Book Early Before Eid',
      description: 'Secure your animal in advance to get the best selection and avoid last-minute rush.'
    }
  ];

  const whyChoose = [
    {
      id: 1,
      icon: 'fa-certificate',
      title: 'Verified Animals',
      description: 'All animals are verified healthy and meet Qurbani standards.'
    },
    {
      id: 2,
      icon: 'fa-tags',
      title: 'Transparent Pricing',
      description: 'Clear pricing with no hidden charges. What you see is what you pay.'
    },
    {
      id: 3,
      icon: 'fa-shield-alt',
      title: 'Trusted Farm Locations',
      description: 'Partner with verified farms across Bangladesh with proven quality.'
    },
    {
      id: 4,
      icon: 'fa-mouse',
      title: 'Simple Online Booking',
      description: 'Easy booking process with secure payment and instant confirmation.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Razin Chowdhury',
      location: 'Sylhet',
      rating: 5,
      text: 'Excellent website! Found a healthy cow easily. The animal was exactly as described. Highly recommended for anyone looking for Qurbani animals.',
      avatar: 'https://scontent.fjsr15-1.fna.fbcdn.net/v/t39.30808-6/471600286_1150804533274617_7215337919184135312_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGuwsW0RV0dZklcJb6N5jAuVtsWPpsc8b9W2xY-mxzxv-ln5UXY7CaWShTWrR-cy4WXeUOQvN7bNPPqJUooyzIL&_nc_ohc=_rKcLiiqFaEQ7kNvwEd47DK&_nc_oc=AdqJNLUxqcZUSRX_CMRIwZ6A45au1u3uYMQ6Lvdnk56tYbNxQ-zIL8OFNTbbpgLIixc&_nc_zt=23&_nc_ht=scontent.fjsr15-1.fna&_nc_gid=YzxVifEnBWPT3CJkU6IL5g&_nc_ss=7b2a8&oh=00_Af49qK_mv4OPD8-y7z7JQtdt2r6lIH0DJ_ZcLELIJxjYUQ&oe=69F988BC'
    },
    {
      id: 2,
      name: 'Sinikdho Mahmud',
      location: 'Kurigram',
      rating: 5,
      text: 'Very satisfied with QurbaniHat! Transparent pricing and helpful customer service. Delivery was on time and the animal was in perfect condition.',
      avatar: 'https://instagram.fjsr15-1.fna.fbcdn.net/v/t51.75761-15/480857022_17901559086131406_3828935458209911941_n.webp?_nc_cat=101&ig_cache_key=MzU3NDI2OTU3NDkxNDA5NTYwOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=7oAElJ2Oc-8Q7kNvwEm8pMU&_nc_oc=AdpEXPl-tZ-FXGX95touYct40XnjkjpMunn5wL_tI-JY0uxl3xXUwVukE2zTFlcwfG8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fjsr15-1.fna&_nc_gid=8qa7zlgBom3G5Ax6YBI_hg&_nc_ss=7a22e&oh=00_Af2aHVgEHLJeVmN_DM_Goju_KX1-5u7AWAa161cOb-6mLA&oe=69F99DB8'
    },
    {
      id: 3,
      name: 'Karim Hassan',
      location: 'Sylhet',
      rating: 5,
      text: 'Best platform for Qurbani animal booking! Great selection of healthy animals. The team was very professional and supportive throughout.',
      avatar: 'https://media.licdn.com/dms/image/v2/C5103AQE65D3GPlLfGA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1568656721509?e=2147483647&v=beta&t=-QfWqDnFWF5aSmrjpIhfvq-pC3mL4irQyql0Dal8sGQ'
    }
  ];

  return (
    <main className="bg-white">
      {/* ================ HERO SECTION ================ */}
      <section className="relative bg-gradient-to-br from-cream via-white to-primary/5 py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side */}
            <div className="space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Trusted by 5,000+ Happy Customers
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-charcoal leading-tight font-extrabold">
                Book Your <span className="text-primary">Halal Qurbani</span> Animal with Confidence
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0 font-light">
                Explore verified cows, goats, and bulls from trusted farms across Bangladesh. Choose healthy livestock, view details, and book easily online.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/all-animals" className="px-8 py-4 bg-primary text-white rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105 flex items-center gap-3 group font-semibold">
                  Browse Animals
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </Link>
                <a href="#tips" className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl hover:bg-primary/5 transition-all hover:scale-105 shadow-md font-semibold">
                  Qurbani Tips
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 max-w-md mx-auto md:mx-0">
                <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-primary/10">
                  <i className="fas fa-check-circle text-primary text-xl"></i>
                  <span className="text-charcoal font-medium text-sm">Verified Livestock</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-primary/10">
                  <i className="fas fa-tags text-primary text-xl"></i>
                  <span className="text-charcoal font-medium text-sm">Fair Pricing</span>
                </div>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative mt-12 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-[2.5rem] transform rotate-3 animate-pulse"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-0 transition-transform duration-500">
                <img
                  src={heroImage}
                  alt="Healthy cattle grazing"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 md:top-6 md:-right-6 lg:-right-10 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-primary/10 animate-bounce-slow z-10">
                <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Animals Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================ STATS SECTION ================ */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { icon: 'fa-users', end: 5000, suffix: '+', label: 'Happy Customers' },
              { icon: 'fa-cow', end: 1000, suffix: '+', label: 'Verified Animals' },
              { icon: 'fa-home', end: 50, suffix: '+', label: 'Trusted Farms' },
              { icon: 'fa-chart-line', end: 98, suffix: '%', label: 'Satisfaction Rate' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto border border-white/10 shadow-lg">
                  <i className={`fas ${stat.icon} text-white text-2xl md:text-3xl`}></i>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/70 text-sm md:text-base font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================ FEATURED ANIMALS SECTION ================ */}
      <section className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <SectionTitle
          title="Featured Qurbani Animals"
          subtitle="Hand-picked healthy animals from trusted farms"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-16">
          {loading
            ? Array(4)
                .fill(0)
                .map((_, idx) => <AnimalCardSkeleton key={idx} />)
            : featuredAnimals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
        </div>

        <div className="text-center">
          <Link to="/all-animals" className="px-10 py-4 bg-primary text-white rounded-xl hover:bg-primary-light transition-all shadow-xl hover:shadow-primary/30 font-bold inline-flex items-center gap-3 hover:scale-105 active:scale-95">
            View All Animals
            <i className="fas fa-chevron-right text-xs"></i>
          </Link>
        </div>
      </section>

      {/* ================ WHY CHOOSE SECTION ================ */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Why Choose QurbaniHat?"
            subtitle="Your trusted partner for halal livestock booking"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {whyChoose.map((feature, idx) => (
              <div key={idx} className="group text-center space-y-6 p-8 rounded-3xl bg-white/50 hover:bg-white transition-all duration-500 hover:shadow-2xl border border-transparent hover:border-primary/5">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                  <i className={`fas ${feature.icon} text-white text-3xl`}></i>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-charcoal">{feature.title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================ QURBANI TIPS SECTION ================ */}
      <section id="tips" className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <SectionTitle
          title="Qurbani Preparation Tips"
          subtitle="Essential guidelines for selecting your Qurbani animal"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {tips.map(tip => (
            <div key={tip.id} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <i className={`fas ${tip.icon} text-primary text-xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-3">{tip.title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================ TESTIMONIALS SECTION ================ */}
      <section className="bg-cream/50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="What Our Customers Say"
            subtitle="Real experiences from satisfied customers"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-white hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-primary/10 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-charcoal text-lg">{testimonial.name}</h4>
                    <p className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-accent text-sm"></i>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed italic font-light text-base md:text-lg">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================ CTA SECTION ================ */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-primary rounded-[3rem] p-10 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Ready to Book Your Qurbani Animal?</h2>
            <p className="text-lg text-white/80 font-light">
              Browse our collection of verified, healthy livestock and secure your Qurbani animal today with ease and trust.
            </p>
            <Link to="/all-animals" className="bg-white text-primary px-10 py-5 rounded-2xl font-bold hover:bg-cream transition-all inline-flex items-center gap-3 shadow-xl hover:scale-105 active:scale-95">
              Browse Animals Now
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
