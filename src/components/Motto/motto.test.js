import { render, screen } from '@testing-library/react';
import Motto from './Motto';

beforeEach(() => {
    render(<Motto />)
})

test('Motto renders on page', () => {
    expect(screen.getByRole('heading', {
        name: /they hate it, you love it\./i
      })).toBeInTheDocument()
})