import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="QurbaniHat Logo" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              QurbaniHat is Bangladesh's leading digital platform for verified halal livestock. We bring the tradition of Qurbani to your fingertips, ensuring health, hygiene, and trust in every booking.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-charcoal transition-all shadow-sm">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-charcoal transition-all shadow-sm">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-charcoal transition-all shadow-sm">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-charcoal transition-all shadow-sm">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-accent pb-2 inline-block uppercase tracking-wider text-sm">Quick Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                <i className="fas fa-chevron-right text-[10px] text-accent"></i> Home
              </Link></li>
              <li><Link to="/all-animals" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                <i className="fas fa-chevron-right text-[10px] text-accent"></i> All Animals
              </Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                <i className="fas fa-chevron-right text-[10px] text-accent"></i> Account Login
              </Link></li>
              <li><Link to="/register" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                <i className="fas fa-chevron-right text-[10px] text-accent"></i> Seller Registration
              </Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-accent pb-2 inline-block uppercase tracking-wider text-sm">Contact Support</h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-envelope text-accent"></i>
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Email Address</p>
                  <a href="mailto:support@qurbanihat.com" className="text-gray-400 hover:text-accent transition-colors">support@qurbanihat.com</a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-phone text-accent"></i>
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Phone Number</p>
                  <a href="tel:+8801700000000" className="text-gray-400 hover:text-accent transition-colors">+880 1700-000000</a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-map-marker-alt text-accent"></i>
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Office Location</p>
                  <p className="text-gray-400">Zindabazar, Sylhet, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-accent pb-2 inline-block uppercase tracking-wider text-sm">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get updates on new livestock and special offers.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent text-white placeholder:text-gray-500 transition-all"
              />
              <button className="w-full bg-accent text-charcoal py-3 rounded-xl font-bold hover:bg-white transition-all shadow-lg active:scale-95">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} QurbaniHat Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}