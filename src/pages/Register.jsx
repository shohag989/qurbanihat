import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth';
import logo from '../assets/logo.svg';

export default function Register() {
  const navigate = useNavigate();
  const { signup, updateUserProfile, sendVerification, logout, signInWithGoogle } = useAuth();
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    setError('');
    try {
      await signInWithGoogle();
      toast.success('Successfully registered and logged in with Google!');
      navigate('/');
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      await signup(formData.email, formData.password);
      if (formData.displayName) {
        await updateUserProfile(formData.displayName, '');
      }
      
      // Send verification email
      await sendVerification();
      
      // Force logout to prevent auto-login
      await logout();
      
      setIsSuccess(true);
      toast.success('Registration successful! Please verify your email.');
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <main className="bg-cream min-h-screen flex items-center justify-center py-12">
        <div className="w-full max-w-md px-4">
          <div className="bg-white rounded-xl shadow-soft-md p-8 text-center">
            <div className="text-6xl text-primary mb-6">
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <h1 className="text-3xl font-bold text-charcoal mb-4">Check Your Email</h1>
            <p className="text-gray-600 mb-8">
              We've sent a verification link to <span className="font-bold text-charcoal">{formData.email}</span>. 
              Please verify your email to activate your account.
            </p>
            <div className="bg-primary/5 p-4 rounded-lg mb-8 text-sm text-primary font-medium">
              Check your email & verify, then log in
            </div>
            <Link to="/login" className="w-full btn-primary py-3 font-semibold text-lg block">
              <i className="fas fa-sign-in-alt mr-2"></i>
              Go to Login
            </Link>
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
            <p className="text-gray-600 mt-2">Create your account</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              <i className="fas fa-exclamation-circle mr-2"></i>
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                placeholder="Your full name"
              />
            </div>

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
              <p className="text-xs text-gray-500 mt-1">At least 6 characters</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 font-semibold text-lg mt-6"
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Creating account...
                </>
              ) : (
                <>
                  <i className="fas fa-user-plus mr-2"></i>
                  Create Account
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

          {/* Social Signup */}
          <button 
            type="button"
            onClick={handleGoogleSignup}
            disabled={loading}
            className="w-full border-2 border-gray-300 py-3 rounded-lg font-semibold text-gray-700 hover:border-primary hover:text-primary transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <i className="fab fa-google mr-2"></i>
            Sign up with Google
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-8">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Login here
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