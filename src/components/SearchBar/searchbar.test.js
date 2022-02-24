import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

beforeEach(() => {
    render(<SearchBar />)
})

test('Search bar renders on page', () => {
    expect(screen.getByRole('textbox', {
        name: /enter a movie/i
    })).toBeInTheDocument()

    expect(screen.getByRole('button', {
        name: /get the verdict/i
    })).toBeInTheDocument()
})