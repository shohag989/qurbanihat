import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase only if API key is present
let app;
try {
  if (!firebaseConfig.apiKey) {
    console.warn("Firebase API Key is missing. Check your environment variables.");
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