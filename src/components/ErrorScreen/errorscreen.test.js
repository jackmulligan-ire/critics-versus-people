import { render, screen } from '@testing-library/react';
import ErrorScreen from './ErrorScreen';

test('Error message shows up on the screen', () => {
    render(<ErrorScreen />)
    expect(screen.getByRole('heading', {
        name: /error/i
    })).toBeInTheDocument()
})

test('Name of movie shows up in error message', () => {
    render(<ErrorScreen query="silly silly movie"/>)
    expect(screen.getByText(/"silly silly movie" isn't a movie/)).
    toBeInTheDocument()
})

test('Search bar renders on page', () => {
    render(<ErrorScreen query="silly silly movie"/>)
    expect(screen.getByRole('textbox', {
        name: /enter a movie/i
    })).toBeInTheDocument()
})