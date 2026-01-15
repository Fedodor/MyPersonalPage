import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Global Mock for IntersectionObserver
window.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

// Mock window.scroll
window.scroll = vi.fn();
window.scrollTo = vi.fn();
