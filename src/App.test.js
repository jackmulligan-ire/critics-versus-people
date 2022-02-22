import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />)
})

test('Logo renders on page', () => {
  expect(screen.getByText(/critics vs. viewers/i)).toBeInTheDocument()
});
