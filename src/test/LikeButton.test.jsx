import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../Context/ThemeContext';
import { FavoritesProvider } from '../Context/FavoritesProvider';
import LikeButton from '../Components/LikeButton';

// Mock the hooks
vi.mock('../hooks/useTheme', () => ({
  useTheme: () => ({
    isDark: false,
  }),
}));

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

describe('LikeButton Component', () => {
  it('renders like button with proper accessibility', () => {
    render(
      <TestWrapper>
        <LikeButton gif="https://example.com/test.gif" tag="test" />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Add to favorites');
    expect(button).toHaveAttribute('title', 'Add to favorites');
  });

  it('shows heart icon', () => {
    render(
      <TestWrapper>
        <LikeButton gif="https://example.com/test.gif" tag="test" />
      </TestWrapper>
    );
    
    const heartIcon = screen.getByRole('button').querySelector('svg');
    expect(heartIcon).toBeInTheDocument();
  });

  it('can be clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <LikeButton gif="https://example.com/test.gif" tag="test" />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    // Button should remain clickable after interaction
    expect(button).toBeInTheDocument();
  });
});
