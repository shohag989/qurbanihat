# Firebase Setup Guide

## Authentication Examples

### Using the useAuth Hook

```javascript
import { useAuth } from "@/hooks/useAuth";

function MyComponent() {
  const { user, loading, signup, login, logout, updateUserProfile } = useAuth();

  // User is loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // User is logged in
  if (user) {
    return (
      <div>
        <p>Welcome, {user.displayName || user.email}</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  // User is not logged in
  return <div>Please log in</div>;
}
```

### Sign Up

```javascript
const handleSignup = async (e) => {
  e.preventDefault();
  try {
    const user = await signup(email, password);
    // Update profile with additional info
    await updateUserProfile(displayName, photoURL);
    console.log("Signup successful");
  } catch (error) {
    console.error("Signup failed:", error.message);
  }
};
```

### Login

```javascript
const handleLogin = async (e) => {
  e.preventDefault();
  try {
    await login(email, password);
    console.log("Login successful");
  } catch (error) {
    console.error("Login failed:", error.message);
  }
};
```

### Update Profile

```javascript
const handleUpdateProfile = async () => {
  try {
    await updateUserProfile("John Doe", "https://example.com/photo.jpg");
    console.log("Profile updated");
  } catch (error) {
    console.error("Update failed:", error.message);
  }
};
```

## Firestore Operations

### Get All Animals

```javascript
import { getAllAnimals } from "@/firebase/firestore";

const fetchAnimals = async () => {
  try {
    const animals = await getAllAnimals();
    setAnimals(animals);
  } catch (error) {
    console.error("Error fetching animals:", error);
  }
};
```

### Get Single Animal

```javascript
import { getAnimalById } from "@/firebase/firestore";

const fetchAnimal = async (animalId) => {
  try {
    const animal = await getAnimalById(animalId);
    setAnimal(animal);
  } catch (error) {
    console.error("Error fetching animal:", error);
  }
};
```

### Create Order

```javascript
import { createOrder, getUserOrders } from "@/firebase/firestore";

const handleCreateOrder = async (animalId) => {
  const { user } = useAuth();
  try {
    const orderId = await createOrder(user.uid, {
      animalId,
      quantity: 1,
      totalPrice: animal.price,
    });
    console.log("Order created:", orderId);
  } catch (error) {
    console.error("Error creating order:", error);
  }
};
```

## Environment Variables

The following environment variables are already set in `.env.local`:

```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_MEASUREMENT_ID
```

## Firestore Collection Structure

### Users Collection

```
users/{userId}
- displayName (string)
- email (string)
- photoURL (string)
- phone (string)
- address (string)
- createdAt (timestamp)
```

### Animals Collection

```
animals/{animalId}
- name (string)
- type (string) - cow, goat, sheep, etc.
- breed (string)
- age (number)
- price (number)
- weight (number)
- image (string) - image URL
- description (string)
- createdAt (timestamp)
```

### Orders Collection

```
orders/{orderId}
- userId (string)
- animalId (string)
- quantity (number)
- totalPrice (number)
- status (string) - pending, confirmed, completed
- createdAt (timestamp)
```

## Firebase Authentication Methods Available

- `signup(email, password)` - Register new user
- `login(email, password)` - Login user
- `logout()` - Logout user
- `updateUserProfile(displayName, photoURL)` - Update profile
- `updateUserEmail(newEmail)` - Change email
- `updateUserPassword(newPassword)` - Change password

## Protected Routes

Use the `PrivateRoute` component to protect routes that require authentication:

```javascript
import PrivateRoute from "@/components/PrivateRoute";

<Routes>
  <Route
    path="/dashboard"
    element={
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    }
  />
</Routes>;
```
