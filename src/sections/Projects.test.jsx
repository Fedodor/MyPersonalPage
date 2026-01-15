import { render, screen } from '@testing-library/react';
import Projects from './Projects';
import { describe, it, expect } from 'vitest';

describe('Projects Section', () => {
    it('renders the projects title', () => {
        render(<Projects />);
        expect(screen.getByText('Projects', { selector: 'h2' })).toBeInTheDocument();
    });

    it('renders project cards', () => {
        render(<Projects />);
        // Checking for specific project titles mentioned in the component
        expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
        expect(screen.getByText('Task Management App')).toBeInTheDocument();
    });
});
