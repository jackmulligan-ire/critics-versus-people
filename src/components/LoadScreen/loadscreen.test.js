import { render, screen } from '@testing-library/react';
import LoadScreen from './LoadScreen';

beforeEach(() => {
    render(<LoadScreen />)
})

test('Loading on page', () => {
    expect(screen.getByRole('heading', {
        name: /Loading/i
      })).toBeInTheDocument()
})