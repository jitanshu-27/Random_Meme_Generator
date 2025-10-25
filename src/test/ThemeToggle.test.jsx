import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeProvider } from '../Context/ThemeContext';
import { FavoritesProvider } from '../Context/FavoritesProvider';
import ThemeToggle from '../Components/ThemeToggle';

// Mock the useTheme hook
vi.mock('../hooks/useTheme', () => ({
  useTheme: () => ({
    isDark: false,
    toggleTheme: vi.fn(),
  }),
}));

const TestWrapper = ({ children }) => (
  <ThemeProvider>
    <FavoritesProvider>
      {children}
    </FavoritesProvider>
  </ThemeProvider>
);

describe('ThemeToggle', () => {
  it('renders theme toggle button', () => {
    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Switch to dark theme');
  });

  it('has proper accessibility attributes', () => {
    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('title', 'Switch to dark theme');
    expect(button).toHaveAttribute('aria-label', 'Switch to dark theme');
  });
});
