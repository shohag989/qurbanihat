'use client';

import Link from 'next/link';
import { useAuth } from '../../src/hooks/useAuth';
import PrivateRoute from '../../src/components/PrivateRoute';

export default function MyProfilePage() {
  return (
    <PrivateRoute>
      <MyProfile />
    </PrivateRoute>
  );
}

function MyProfile() {
  const { user, logout } = useAuth();

  return (
    <main className="bg-cream min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-soft-md p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-primary flex-shrink-0">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-5xl">
                  <i className="fas fa-user"></i>
                </div>
              )}
            </div>

            <div className="flex-grow">
              <h1 className="text-4xl font-bold text-charcoal mb-2">
                {user?.displayName || 'User'}
              </h1>
              <p className="text-gray-600 mb-6">{user?.email}</p>

              <div className="flex gap-4">
                <Link href="/update-profile" className="btn-primary inline-flex items-center gap-2">
                  <i className="fas fa-edit"></i>
                  Update Profile
                </Link>
                <button
                  onClick={logout}
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <i className="fas fa-sign-out-alt"></i>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl card-shadow">
            <i className="fas fa-heart text-4xl text-primary mb-4 block"></i>
            <h3 className="text-lg font-bold mb-2">Saved Animals</h3>
            <p className="text-gray-600 text-sm">View your bookmarked animals</p>
          </div>

          <div className="bg-white p-6 rounded-xl card-shadow">
            <i className="fas fa-shopping-bag text-4xl text-primary mb-4 block"></i>
            <h3 className="text-lg font-bold mb-2">My Bookings</h3>
            <p className="text-gray-600 text-sm">Manage your animal bookings</p>
          </div>

          <div className="bg-white p-6 rounded-xl card-shadow">
            <i className="fas fa-cog text-4xl text-primary mb-4 block"></i>
            <h3 className="text-lg font-bold mb-2">Settings</h3>
            <p className="text-gray-600 text-sm">Manage your account settings</p>
          </div>
        </div>
      </div>
    </main>
  );
}
