'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useAuth } from '../../src/hooks/useAuth';
import PrivateRoute from '../../src/components/PrivateRoute';

export default function UpdateProfilePage() {
  return (
    <PrivateRoute>
      <UpdateProfile />
    </PrivateRoute>
  );
}

function UpdateProfile() {
  const { user, updateUserProfile } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    displayName: user?.displayName || '',
    photoURL: user?.photoURL || '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

    try {
      await updateUserProfile(formData.displayName, formData.photoURL);
      toast.success('Profile updated successfully!');
      router.push('/profile');
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-cream min-h-screen py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-xl shadow-soft-md p-8">
          <h1 className="text-3xl font-bold text-charcoal mb-8 text-center">Update Profile</h1>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              <i className="fas fa-exclamation-circle mr-2"></i>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Display Name
              </label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Photo URL
              </label>
              <input
                type="url"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="https://example.com/photo.jpg"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 font-semibold"
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Updating...
                </>
              ) : (
                <>
                  <i className="fas fa-save mr-2"></i>
                  Save Changes
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
