import { Toaster } from 'react-hot-toast';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import AuthProvider from '../src/context/AuthContext';
import './globals.css';

export const metadata = {
  title: 'Qurbani Hat',
  description: 'Buy and sell animals for Qurbani',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Merriweather:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
