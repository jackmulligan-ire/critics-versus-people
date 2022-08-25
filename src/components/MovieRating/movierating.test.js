import { render, screen } from '@testing-library/react';
import MovieRating from './MovieRating';

const setUp = (reviewer, rating) => render(<MovieRating reviewer={reviewer} rating={rating} />);

describe('Critics passed in as reviwer arg', () => {
    test('Reviwer renders', () => {
        render(<MovieRating reviewer="Critics" />)
    
        expect(screen.getByRole('heading', {
            name: /critics/i
        })).toBeInTheDocument()
    })
    describe('Rendering the score for critics', () => {
        beforeEach(() => {
        })
        test('Metacritic score showing on page', () => {
            setUp("Critics", "66")
            expect(screen.getByRole('heading', {
                name: /66/i
            })).toBeInTheDocument()
        })
        test('Score summary showing on page', () => {
            setUp("Critics", "66")
            expect(screen.getByRole('heading', {
                name: /Okay/i
            })).toBeInTheDocument()
        })
    })
    test('No rating available for critics', () => {
        setUp("Critics", "N/A")
        expect(screen.getByRole('heading', {
                name: /Huh\?/i
            })).toBeInTheDocument()
    })
})

describe('Viewers passed in as reviewer arg', () => {
    test('imdb score showing on page', () => {
        setUp("The People", "88")
        expect(screen.getByRole('heading', {
            name: /88/i
        })).toBeInTheDocument()
    })
    test('The people showing up in page', () => {
        setUp("The People", "88")
        expect(screen.getByRole('heading', {
            name: /The People/i
        })).toBeInTheDocument()
    })
})