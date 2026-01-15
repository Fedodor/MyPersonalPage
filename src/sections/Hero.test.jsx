import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { describe, it, expect } from 'vitest';

describe('Hero Section', () => {
    it('renders the name and title', () => {
        render(<Hero />);
        expect(screen.getByText('Your Name')).toBeInTheDocument();
        expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
    });

    it('renders CTA buttons', () => {
        render(<Hero />);
        expect(screen.getByText('View Projects')).toBeInTheDocument();
        expect(screen.getByText('Contact Me')).toBeInTheDocument();
    });

    it('renders social links with Gmail', () => {
        render(<Hero />);
        const links = screen.getAllByRole('link');
        const mailLink = links.find(link => link.getAttribute('href')?.includes('mail.google.com'));
        expect(mailLink).toBeInTheDocument();
        expect(mailLink).toHaveAttribute('target', '_blank');
    });
});
