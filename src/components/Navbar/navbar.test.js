import { render, screen } from '@testing-library/react';
import SiteNavbar from './Navbar';

beforeEach(() => {
    render(<SiteNavbar />)
})

test('Navbar renders on the page', () => {
    expect(screen.getByText(/critics vs\. viewers/i)).toBeInTheDocument()
})
