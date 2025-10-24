import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../Context/ThemeContext';
import { FavoritesProvider } from '../Context/FavoritesProvider';
import SearchAndCategories from '../Components/SearchAndCategories';

// Mock the useTheme hook
vi.mock('../hooks/useTheme', () => ({
  useTheme: () => ({
    isDark: false,
  }),
}));

const TestWrapper = ({ children }) => (
  <ThemeProvider>
    <FavoritesProvider>
      {children}
    </FavoritesProvider>
  </ThemeProvider>
);

describe('SearchAndCategories Component', () => {
  const mockOnSearch = vi.fn();
  const mockOnCategorySelect = vi.fn();

  beforeEach(() => {
    mockOnSearch.mockClear();
    mockOnCategorySelect.mockClear();
  });

  it('renders search input and category buttons', () => {
    render(
      <TestWrapper>
        <SearchAndCategories 
          onSearch={mockOnSearch}
          onCategorySelect={mockOnCategorySelect}
          currentTag="test"
        />
      </TestWrapper>
    );
    
    expect(screen.getByPlaceholderText(/search for any topic/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search for gifs/i })).toBeInTheDocument();
    expect(screen.getByText('funny')).toBeInTheDocument();
    expect(screen.getByText('cats')).toBeInTheDocument();
  });

  it('calls onSearch when search form is submitted', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <SearchAndCategories 
          onSearch={mockOnSearch}
          onCategorySelect={mockOnCategorySelect}
          currentTag="test"
        />
      </TestWrapper>
    );
    
    const searchInput = screen.getByPlaceholderText(/search for any topic/i);
    const searchButton = screen.getByRole('button', { name: /search for gifs/i });
    
    await user.type(searchInput, 'dogs');
    await user.click(searchButton);
    
    expect(mockOnSearch).toHaveBeenCalledWith('dogs');
  });

  it('calls onCategorySelect when category button is clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <SearchAndCategories 
          onSearch={mockOnSearch}
          onCategorySelect={mockOnCategorySelect}
          currentTag="test"
        />
      </TestWrapper>
    );
    
    const funnyButton = screen.getByRole('button', { name: /select funny category/i });
    await user.click(funnyButton);
    
    expect(mockOnCategorySelect).toHaveBeenCalledWith('funny');
  });

  it('highlights current selected category', () => {
    render(
      <TestWrapper>
        <SearchAndCategories 
          onSearch={mockOnSearch}
          onCategorySelect={mockOnCategorySelect}
          currentTag="funny"
        />
      </TestWrapper>
    );
    
    const funnyButton = screen.getByRole('button', { name: /select funny category/i });
    expect(funnyButton).toHaveAttribute('aria-pressed', 'true');
  });
});
