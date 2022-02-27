import { render, screen } from '@testing-library/react';
import Logo from './Logo';

beforeEach(() => {
    render(<Logo />)
})

test('Logo renders on page', () => {
    expect(screen.getByRole('heading', {
        name: /critics vs\. viewers/i
      })).toBeInTheDocument()
})