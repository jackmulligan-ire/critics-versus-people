import { render, screen } from '@testing-library/react';
import Logo from './Logo';

const setUp = () => render(<Logo />);

test('Logo renders on page', () => {
    setUp();
    expect(screen.getByRole('heading', {
        name: /critics vs\. the people/i
      })).toBeInTheDocument()
})