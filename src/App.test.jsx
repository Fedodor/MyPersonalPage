import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect, vi } from 'vitest';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('App Component', () => {
    it('renders without crashing', () => {
        render(<App />);
        // Check if navigation is present
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
    });
});
