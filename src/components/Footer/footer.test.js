import { render, screen } from '@testing-library/react';
import Footer from './Footer';

beforeEach(() => {
    render(<Footer />)
})

test('Footer renders on page', () => {
    expect(screen.getByText(/OMDB API/i)).
    toBeInTheDocument()
});

test('Link renders on page', () => {
    expect(screen.getByRole('link')).toHaveAttribute('href', 'http://www.omdbapi.com/')
})