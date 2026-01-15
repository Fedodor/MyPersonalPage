import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import { describe, it, expect } from 'vitest';

describe('Navigation Component', () => {
    it('renders all navigation links', () => {
        render(<Navigation />);
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Skills')).toBeInTheDocument();
        expect(screen.getByText('Projects')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('displays the logo correctly', () => {
        render(<Navigation />);
        expect(screen.getByText('Portfolio')).toBeInTheDocument();
    });
});
