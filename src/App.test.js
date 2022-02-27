import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />)
})

test('Logo renders on page', () => {
  expect(screen.getByRole('heading', {
      name: /critics vs\. viewers/i
    })).toBeInTheDocument()
})

test('Motto renders on page', () => {
  expect(screen.getByRole('heading', {
      name: /they hate it, you love it\./i
    })).toBeInTheDocument()
})
