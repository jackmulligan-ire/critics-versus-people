import { render, screen } from '@testing-library/react';
import Logo from './Logo';

beforeEach(() => {
    render(<Logo />)
})

test('Logo renders on page', () => {
    expect(screen.getByText(/critics vs. viewers/i)).toBeInTheDocument()
})