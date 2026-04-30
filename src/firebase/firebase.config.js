import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase only if API key is present
let app;
try {
  if (!firebaseConfig.apiKey) {
    console.warn("Firebase API Key is missing. Check your environment variables.");
    // Initialize with dummy values to prevent crashing during build/initial load
    // but the app will likely fail when calling Firebase services.
    app = initializeApp({ ...firebaseConfig, apiKey: "dummy-key" });
  } else {
    app = initializeApp(firebaseConfig);
  }
} catch (error) {
  console.error("Firebase initialization failed:", error);
}

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Safe Analytics initialization
let analytics = null;
import("firebase/analytics").then((module) => {
  module.isSupported().then((supported) => {
    if (supported) {
      analytics = module.getAnalytics(app);
    }
  });
}).catch((err) => console.warn("Firebase Analytics not supported or failed to load:", err));

export { analytics };
export default app;