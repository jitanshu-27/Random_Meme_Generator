import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

const SearchAndCategories = ({ onSearch, onCategorySelect, currentTag }) => {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  
  const popularCategories = [
    'funny', 'cats', 'dogs', 'cars', 'dance', 'happy', 'excited', 
    'food', 'sports', 'music', 'movies', 'anime', 'love', 'fail'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      setSearchTerm('');
    }
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <section 
      className={`w-full max-w-4xl mx-auto p-4 sm:p-6 rounded-lg border transition-colors duration-300 ${
        isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'
      }`}
      aria-label="Search and category selection"
    >
      {/* Search Section */}
      <div className="mb-6">
        <h2 className={`text-lg sm:text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Search for GIFs
        </h2>
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
          <label htmlFor="search-input" className="sr-only">
            Search for GIFs
          </label>
          <input
            id="search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for any topic..."
            className={`flex-1 px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-4 ${
              isDark 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-300' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-200'
            }`}
          />
          <button
            type="submit"
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
              isDark 
                ? 'bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-300' 
                : 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-200'
            }`}
            aria-label="Search for GIFs"
          >
            Search
          </button>
        </form>
      </div>

      {/* Categories Section */}
      <div>
        <h2 className={`text-lg sm:text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Popular Categories
        </h2>
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2"
          role="group"
          aria-label="Popular category buttons"
        >
          {popularCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 ${
                currentTag === category
                  ? isDark
                    ? 'bg-purple-600 text-white focus:ring-purple-300'
                    : 'bg-purple-500 text-white focus:ring-purple-200'
                  : isDark
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 focus:ring-gray-400'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-300'
              }`}
              aria-label={`Select ${category} category`}
              aria-pressed={currentTag === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchAndCategories;
