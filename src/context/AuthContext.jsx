import { createContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  updatePassword,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Create new user account
  const signup = async (email, password) => {
    try {
      setError(null);
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Sign in with email and password
  const login = async (email, password) => {
    try {
      setError(null);
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Sign out
  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
      setUser(null);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Update user profile
  const updateUserProfile = async (displayName, photoURL) => {
    try {
      setError(null);
      if (user) {
        await updateProfile(user, {
          displayName,
          photoURL,
        });
        setUser((prevUser) => ({
          ...prevUser,
          displayName,
          photoURL,
        }));
      }
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Update user email
  const updateUserEmail = async (newEmail) => {
    try {
      setError(null);
      if (user) {
        await updateEmail(user, newEmail);
        setUser((prevUser) => ({
          ...prevUser,
          email: newEmail,
        }));
      }
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Update user password
  const updateUserPassword = async (newPassword) => {
    try {
      setError(null);
      if (user) {
        await updatePassword(user, newPassword);
      }
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Set up auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authValue = {
    user,
    loading,
    error,
    signup,
    login,
    logout,
    updateUserProfile,
    updateUserEmail,
    updateUserPassword,
    auth,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}