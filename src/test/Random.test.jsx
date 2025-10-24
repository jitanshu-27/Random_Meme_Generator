import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeProvider } from '../Context/ThemeContext';
import { FavoritesProvider } from '../Context/FavoritesProvider';
import Random from '../Components/Random';

// Mock the useGif hook
vi.mock('../Hooks/useGif', () => ({
  default: () => ({
    gif: 'https://example.com/test.gif',
    loading: false,
    fetchData: vi.fn(),
  }),
}));

// Mock the useTheme hook
vi.mock('../hooks/useTheme', () => ({
  useTheme: () => ({
    isDark: false,
  }),
}));

// Mock the useFavorites hook
vi.mock('../hooks/useFavorites', () => ({
  useFavorites: () => ({
    addToFavorites: vi.fn(),
    removeFromFavorites: vi.fn(),
    isFavorite: vi.fn(() => false),
  }),
}));

const TestWrapper = ({ children }) => (
  <ThemeProvider>
    <FavoritesProvider>
      {children}
    </FavoritesProvider>
  </ThemeProvider>
);

describe('Random Component', () => {
  it('renders random gif section', () => {
    render(
      <TestWrapper>
        <Random />
      </TestWrapper>
    );
    
    expect(screen.getByRole('heading', { name: /a random gif/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /generate a new random gif/i })).toBeInTheDocument();
  });

  it('displays gif image when not loading', () => {
    render(
      <TestWrapper>
        <Random />
      </TestWrapper>
    );
    
    const image = screen.getByAltText('Random gif');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/test.gif');
  });

  it('has proper accessibility structure', () => {
    render(
      <TestWrapper>
        <Random />
      </TestWrapper>
    );
    
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByLabelText('Generate a new random gif')).toBeInTheDocument();
  });
});
