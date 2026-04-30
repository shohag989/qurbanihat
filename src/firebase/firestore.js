import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebase.config';

// ==================== USERS ====================
export const createUserProfile = async (userId, userData) => {
  try {
    await setDoc(doc(db, 'users', userId), {
      ...userData,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

export const getUserProfile = async (userId) => {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (userId, updateData) => {
  try {
    await updateDoc(doc(db, 'users', userId), updateData);
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// ==================== ANIMALS ====================
export const getAllAnimals = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'animals'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error getting animals:', error);
    throw error;
  }
};

export const getAnimalById = async (animalId) => {
  try {
    const docRef = doc(db, 'animals', animalId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  } catch (error) {
    console.error('Error getting animal:', error);
    throw error;
  }
};

export const createAnimal = async (animalData) => {
  try {
    const docRef = await addDoc(collection(db, 'animals'), {
      ...animalData,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating animal:', error);
    throw error;
  }
};

export const updateAnimal = async (animalId, updateData) => {
  try {
    await updateDoc(doc(db, 'animals', animalId), updateData);
  } catch (error) {
    console.error('Error updating animal:', error);
    throw error;
  }
};

export const deleteAnimal = async (animalId) => {
  try {
    await deleteDoc(doc(db, 'animals', animalId));
  } catch (error) {
    console.error('Error deleting animal:', error);
    throw error;
  }
};

// ==================== ORDERS ====================
export const createOrder = async (userId, orderData) => {
  try {
    const docRef = await addDoc(collection(db, 'orders'), {
      userId,
      ...orderData,
      createdAt: new Date(),
      status: 'pending',
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const getUserOrders = async (userId) => {
  try {
    const q = query(
      collection(db, 'orders'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error getting user orders:', error);
    throw error;
  }
};

export const updateOrder = async (orderId, updateData) => {
  try {
    await updateDoc(doc(db, 'orders', orderId), updateData);
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
};

// ==================== STORAGE ====================
export const uploadUserProfileImage = async (userId, file) => {
  try {
    const storageRef = ref(storage, `profile-images/${userId}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading profile image:', error);
    throw error;
  }
};

export const uploadAnimalImage = async (animalId, file) => {
  try {
    const storageRef = ref(storage, `animal-images/${animalId}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading animal image:', error);
    throw error;
  }
};
