import React, { useState } from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { useTheme } from '../hooks/useTheme';

const FavoritesList = () => {
  const { favorites, removeFromFavorites, clearAllFavorites } = useFavorites();
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  if (favorites.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-20 right-4 z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl
          ${isDark 
            ? 'bg-purple-600 text-white hover:bg-purple-500' 
            : 'bg-purple-500 text-white hover:bg-purple-600'
          }
        `}
        aria-label="View favorites"
        title={`View favorites (${favorites.length})`}
      >
        <div className="relative">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {favorites.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </div>
      </button>

      {isOpen && (
        <div className={`
          absolute top-full right-0 mt-2 w-80 max-h-96 overflow-y-auto rounded-lg shadow-xl border
          ${isDark 
            ? 'bg-gray-800 border-gray-600' 
            : 'bg-white border-gray-200'
          }
        `}>
          <div className={`p-4 border-b ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
            <div className="flex justify-between items-center">
              <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Favorites ({favorites.length})
              </h3>
              <button
                onClick={clearAllFavorites}
                className="text-red-500 hover:text-red-600 text-sm font-medium"
              >
                Clear All
              </button>
            </div>
          </div>
          
          <div className="p-2">
            {favorites.map((fav) => (
              <div 
                key={fav.id} 
                className={`
                  flex items-center gap-3 p-2 rounded-lg mb-2 transition-colors duration-200
                  ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}
                `}
              >
                <img 
                  src={fav.url} 
                  alt={`Favorite ${fav.tag} gif`}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {fav.tag}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {new Date(fav.addedAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => removeFromFavorites(fav.url)}
                  className="text-red-500 hover:text-red-600 p-1"
                  aria-label="Remove from favorites"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
