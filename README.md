# 🐄 QurbaniHat - Livestock Booking Platform

A modern and responsive livestock booking platform where users can explore halal Qurbani animals such as cows, goats, and bulls, view details, and place bookings after authentication.

---

## 🌐 Live Site

🔗 **Live URL:** [QurbaniHat Live Site](https://qurbanihat-sigma.vercel.app/))

---

## 📂 GitHub Repository

🔗 **Repository:** [QurbaniHat GitHub Repo](https://github.com/shohag989/qurbanihat.git))

---

## 📸 Preview

![Project Preview](https://github.com/shohag989/qurbanihat/blob/main/Cover%20%F0%9F%93%B8.jpg)

> Replace this image link with your own project screenshot.  
> You can upload your screenshot to [postimages.org](https://postimages.org/) and use the direct image link.

---

## 🎯 Project Purpose

**QurbaniHat** is a halal livestock marketplace designed for Qurbani animal booking. Users can browse verified animals, check detailed information such as breed, weight, age, price, and location, and place a booking through a protected route after login.

This project was created as part of **Assignment Category: category-A8-Pineapple**.

---

## 🚀 Key Features

- Fully responsive design for mobile, tablet, and desktop
- Modern livestock marketplace UI
- Firebase email/password authentication
- Google social login
- Protected private routes
- Dynamic animal details page
- Booking form with success toast
- Booking form resets after successful submission
- Animal price sorting feature
- My Profile page for logged-in users
- Update profile information feature
- Loading state while fetching data
- Custom 404 Not Found page
- Environment variables for Firebase security
- Lottie animation integration
- Clean and reusable component structure

---

## 🛠️ Tech Stack

<p align="left">
  <img src="https://skillicons.dev/icons?i=react" alt="React" />
  <img src="https://skillicons.dev/icons?i=vite" alt="Vite" />
  <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" />
  <img src="https://skillicons.dev/icons?i=firebase" alt="Firebase" />
  <img src="https://skillicons.dev/icons?i=vercel" alt="Vercel" />
  <img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript" />
  <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
  <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
</p>

---

## 📦 NPM Packages Used

| Package | Purpose |
|--------|---------|
| `react-router-dom` | Routing and private routes |
| `firebase` | Authentication and user profile management |
| `react-toastify` | Toast notifications |
| `react-icons` | Icons |
| `lottie-react` | Lottie animation |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Prebuilt Tailwind CSS components |

---

## 📄 Main Pages

| Page | Description |
|------|-------------|
| Home | Landing page with hero, featured animals, Qurbani tips, and top breeds |
| All Animals | Displays all livestock with sorting option |
| Animal Details | Private route with full animal details and booking form |
| Login | User login with email/password and Google |
| Register | User registration with name, email, photo URL, and password |
| My Profile | Shows logged-in user information |
| Update Profile | Allows user to update name and profile image |
| Not Found | Custom 404 error page |

---

## 🔐 Authentication Features

- Register with name, email, photo URL, and password
- Login with email and password
- Login with Google
- Logout functionality
- Conditional navbar based on authentication status
- Protected private routes
- User profile update using Firebase authentication

---

## 🐂 Animal Data Structure

The project uses a local JSON file containing livestock data.

Example:

```json
{
  "id": 1,
  "name": "Deshi Shahi Cow",
  "type": "Cow",
  "breed": "Local Deshi",
  "price": 120000,
  "weight": 280,
  "age": 3,
  "location": "Bogura",
  "description": "Healthy deshi cow suitable for Qurbani. Well fed with natural খাবার.",
  "image": "https://i.postimg.cc/example-cow1.jpg",
  "category": "Large Animal"
}
````

---

## 🔒 Environment Variables

Create a `.env.local` file in the root directory and add your Firebase configuration:

```env
  apiKey: "AIzaSyA19L6DGmBO8ZmqGvnEycmO9Fj1wvz3s90",
  authDomain: "qurbanihaat.firebaseapp.com",
  projectId: "qurbanihaat",
  storageBucket: "qurbanihaat.firebasestorage.app",
  messagingSenderId: "159665285621",
  appId: "1:159665285621:web:c1250c7c186e413634d8bc",
  measurementId: "G-1QHMLTQ37G"
```

Make sure `.env.local` is added to `.gitignore`.

---

## 🧭 Routes

### Public Routes

```txt
/
 /animals
 /login
 /register
```

### Private Routes

```txt
/details-page/:id
/my-profile
/update-profile
```

### Error Route

```txt
*
```

---

## 📱 Responsive Design

The website is fully responsive and optimized for:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

---

## ⚙️ Local Installation

Follow these steps to run the project locally:

```bash
git clone https://github.com/your-username/qurbanihat.git
cd qurbanihat
npm install
npm run dev
```

---

## 🚀 Deployment

This project is deployed using **Vercel**.

To prevent route reload errors in a single-page application, add a `vercel.json` file:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 📌 Challenges Implemented

### 1. My Profile

Logged-in users can view their profile information including:

* Name
* Email
* Profile image

### 2. Update Information

Users can update their profile information using:

* New name
* New image URL

### 3. Extra NPM Package

Implemented **Lottie React** for animation to make the UI more engaging and modern.

---

## 🧪 Testing Checklist

* Home page loads correctly
* All Animals page displays at least 6 animals
* Sort by price works properly
* Details page is protected
* Login works with email and password
* Register works with email and password
* Google login works
* Logout works
* Booking form shows success toast
* Booking form resets after submit
* My Profile page shows user data
* Update Profile page updates user info
* Navbar changes based on login status
* 404 page works
* Website is responsive on mobile, tablet, and desktop
* Page reload does not show route error after deployment

---

## 👨‍💻 Author

**Your Name**

* GitHub: [shohag](https://github.com/shohag989)
* Email: [contact.devshohag@gmail.com](mailto:contact.devshohag@gmail.com)

---

## 📜 License

This project is created for educational purposes as part of a programming assignment.
