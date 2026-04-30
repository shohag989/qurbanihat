import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
    } catch {
      toast.error('Logout failed');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Animals', path: '/all-animals' },
  ];

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="QurbaniHat Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <Link 
                to="/profile" 
                title={user.displayName || 'Profile'}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary hover:border-primary/70 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-primary">
                    <i className="fas fa-user text-xl"></i>
                  </div>
                )}
              </Link>
              <button
                onClick={handleLogout}
                title="Logout"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <i className="fas fa-sign-out-alt text-lg"></i>
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 font-medium hover:text-primary transition">
                Login
              </Link>
              <Link to="/register" className="btn-primary">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary text-2xl focus:outline-none"
        >
          <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-6 px-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <div className="border-t border-gray-100 pt-5 mt-2 flex flex-col gap-4">
              {user ? (
                <>
                  <Link 
                    to="/profile" 
                    onClick={toggleMenu} 
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-primary">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                          <i className="fas fa-user"></i>
                        </div>
                      )}
                    </div>
                    <span className="font-semibold">{user.displayName || 'Profile'}</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="btn-primary w-full text-center py-3"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMenu} className="text-gray-600 font-medium py-2 text-center">
                    Login
                  </Link>
                  <Link to="/register" onClick={toggleMenu} className="btn-primary text-center py-3">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}