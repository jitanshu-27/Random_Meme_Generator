import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { useTheme } from '../hooks/useTheme';

const LikeButton = ({ gif, tag = 'random' }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { isDark } = useTheme();
  const isLiked = isFavorite(gif);

  const handleToggleLike = () => {
    if (isLiked) {
      removeFromFavorites(gif);
    } else {
      addToFavorites({ url: gif, tag });
    }
  };

  return (
    <button
      onClick={handleToggleLike}
      className={`
        p-2 rounded-full transition-all duration-300 transform hover:scale-110
        ${isLiked 
          ? 'text-red-500 hover:text-red-600' 
          : isDark 
            ? 'text-gray-400 hover:text-red-400' 
            : 'text-gray-500 hover:text-red-500'
        }
      `}
      aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
      title={isLiked ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg 
        className="w-6 h-6" 
        fill={isLiked ? 'currentColor' : 'none'} 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
        />
      </svg>
    </button>
  );
};

export default LikeButton;
