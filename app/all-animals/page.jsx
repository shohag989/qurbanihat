'use client';

import { useState, useEffect } from 'react';
import AnimalCard from '../../src/components/AnimalCard';
import { AnimalCardSkeleton } from '../../src/components/Skeleton';

export default function AllAnimals() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    setLoading(true);
    fetch('/animals.json')
      .then(res => res.json())
      .then(data => {
        setAnimals(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading animals:', err);
        setLoading(false);
      });
  }, []);

  const filteredAnimals = filterType === 'All' 
    ? [...animals] 
    : animals.filter(animal => animal.type === filterType);

  if (sortBy === 'low-to-high') {
    filteredAnimals.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'high-to-low') {
    filteredAnimals.sort((a, b) => b.price - a.price);
  }

  const animalTypes = ['All', ...new Set(animals.map(a => a.type))];

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-cream via-white to-primary/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Find Your <span className="text-primary">Qurbani</span> Animal
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            Browse our wide selection of healthy, verified livestock. Use the filters below to find the perfect animal for your Qurbani.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter and Sort */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
          <div className="flex flex-col gap-2">
            <div className="text-charcoal font-bold text-lg">
              Showing {filteredAnimals.length} Animals
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-gray-500 text-sm font-medium">Sort by:</label>
              <select 
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-cream text-charcoal px-3 py-1.5 rounded-lg font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          <div className="flex gap-3 flex-wrap justify-center">
            {animalTypes.map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-8 py-2.5 rounded-xl font-bold transition-all duration-300 ${
                  filterType === type
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-cream text-gray-500 hover:bg-primary/5'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {loading
            ? Array(8)
                .fill(0)
                .map((_, idx) => <AnimalCardSkeleton key={idx} />)
            : filteredAnimals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
        </div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-24 bg-cream/30 rounded-[3rem] mt-12 border-2 border-dashed border-gray-200">
            <i className="fas fa-search text-gray-300 text-5xl mb-4"></i>
            <p className="text-gray-500 text-xl font-light">No animals found in this category.</p>
            <button 
              onClick={() => setFilterType('All')}
              className="mt-4 text-primary font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
