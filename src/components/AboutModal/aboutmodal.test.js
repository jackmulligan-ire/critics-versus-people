import { render, screen, getByText } from '@testing-library/react';
import AboutModal from './AboutModal';

beforeEach(() => {
    render(<AboutModal show={true}/>)
})

test('Modal header', () => {
    expect(screen.getByText(/About Critics vs. The People/i)).toBeInTheDocument()
})

test('Modal body', () => {
    expect(screen.getByText(/Metacritic/)).toBeInTheDocument()
    const IMDBnodes = screen.getAllByText(/IMDB/i);
    IMDBnodes.forEach(node => expect(getByText(node, /IMDB/i)).toBeInTheDocument());
})

test('Modal close button', () => {
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
})