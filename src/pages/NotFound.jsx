import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="bg-cream min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <i className="fas fa-exclamation-triangle text-6xl text-primary mb-6 block"></i>
        <h1 className="text-5xl font-bold text-charcoal mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <p className="text-gray-500 mb-12 max-w-md">
          The page you're looking for doesn't exist. Please check the URL or go back to the home page.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <i className="fas fa-home"></i>
          Back to Home
        </Link>
      </div>
    </main>
  );
}