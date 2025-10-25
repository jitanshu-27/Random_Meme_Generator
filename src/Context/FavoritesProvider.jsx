import React, { useState, useEffect } from 'react';
import { FavoritesContext } from './favoritesContext';

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    // Get favorites from localStorage or default to empty array
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    // Save favorites to localStorage whenever it changes
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (gif) => {
    setFavorites(prev => {
      // Check if gif is already in favorites
      const isAlreadyFavorite = prev.some(fav => fav.url === gif.url);
      if (isAlreadyFavorite) return prev;
      
      const newFavorite = {
        id: Date.now(), // Simple ID generation
        url: gif.url,
        tag: gif.tag || 'random',
        addedAt: new Date().toISOString()
      };
      
      return [...prev, newFavorite];
    });
  };

  const removeFromFavorites = (gifUrl) => {
    setFavorites(prev => prev.filter(fav => fav.url !== gifUrl));
  };

  const isFavorite = (gifUrl) => {
    return favorites.some(fav => fav.url === gifUrl);
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    clearAllFavorites,
    favoritesCount: favorites.length
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
