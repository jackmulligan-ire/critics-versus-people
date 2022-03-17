import { render, screen } from '@testing-library/react';
import AboutModal from './AboutModal';

beforeEach(() => {
    render(<AboutModal />)
})

test('Modal header', () => {
    expect(screen.getByText(/About Critics vs. Viewers/i)).toBeInTheDocument()
})

test('Modal body', () => {
    expect(screen.getByText(/Metacritic/)).toBeInTheDocument()
    expect(screen.getByText(/IMDB/i)).toBeInTheDocument()

})

test('Modal close button', () => {
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
})