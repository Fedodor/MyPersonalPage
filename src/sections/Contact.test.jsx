import { render, screen } from '@testing-library/react';
import Contact from './Contact';
import { describe, it, expect } from 'vitest';

describe('Contact Section', () => {
    it('renders contact heading', () => {
        render(<Contact />);
        expect(screen.getByRole('heading', { level: 2, name: /Contact/i })).toBeInTheDocument();
    });

    it('renders email link with Gmail URL', () => {
        render(<Contact />);

        // Check the "Email Me" button
        const emailButton = screen.getByRole('link', { name: /Email Me/i });
        expect(emailButton).toHaveAttribute('href', expect.stringContaining('mail.google.com'));
        expect(emailButton).toHaveAttribute('target', '_blank');

        // Check generic email label link if needed, but the button is the main CTA
        const emailLabelLink = screen.getAllByRole('link').find(link => link.getAttribute('href')?.includes('mail.google.com'));
        expect(emailLabelLink).toBeInTheDocument();
    });
});
