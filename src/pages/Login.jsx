import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth';
import logo from '../assets/logo.svg';

export default function Login() {
  const navigate = useNavigate();
  const { login, logout } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [notVerified, setNotVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setNotVerified(false);

    try {
      const user = await login(formData.email, formData.password);
      
      if (!user.emailVerified) {
        await logout();
        setNotVerified(true);
        toast.error('Email verification required');
        return;
      }

      toast.success('Successfully logged in!');
      navigate('/');
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (notVerified) {
    return (
      <main className="bg-cream min-h-screen flex items-center justify-center py-12">
        <div className="w-full max-w-md px-4">
          <div className="bg-white rounded-xl shadow-soft-md p-8 text-center">
            <div className="text-6xl text-red-500 mb-6">
              <i className="fas fa-user-shield"></i>
            </div>
            <h1 className="text-3xl font-bold text-charcoal mb-4">Verification Required</h1>
            <p className="text-gray-600 mb-8">
              Your email <span className="font-bold text-charcoal">{formData.email}</span> is not verified yet. 
              Please check your inbox and follow the link to verify your account.
            </p>
            <div className="bg-red-50 p-4 rounded-lg mb-8 text-sm text-red-600 font-medium">
              Check your email & verify, then log in
            </div>
            <button 
              onClick={() => setNotVerified(false)}
              className="w-full btn-primary py-3 font-semibold text-lg"
            >
              <i className="fas fa-redo mr-2"></i>
              Try Logging In Again
            </button>
            <p className="mt-6 text-gray-500 text-sm">
              Didn't receive the email? Check your spam folder.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-cream min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-md px-4">
        <div className="bg-white rounded-xl shadow-soft-md p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <img src={logo} alt="QurbaniHat Logo" className="h-16 w-auto mx-auto mb-2" />
            </Link>
            <p className="text-gray-600 mt-2">Login to your account</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              <i className="fas fa-exclamation-circle mr-2"></i>
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 font-semibold text-lg"
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Logging in...
                </>
              ) : (
                <>
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  Login
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Social Login */}
          <button className="w-full border-2 border-gray-300 py-3 rounded-lg font-semibold text-gray-700 hover:border-primary hover:text-primary transition mb-4">
            <i className="fab fa-google mr-2"></i>
            Login with Google
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600 mt-8">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary font-semibold hover:underline">
              Register here
            </Link>
          </p>
        </div>

        {/* Back Home Link */}
        <div className="text-center mt-6">
          <Link to="/" className="text-gray-600 hover:text-primary transition inline-flex items-center gap-2">
            <i className="fas fa-arrow-left"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}