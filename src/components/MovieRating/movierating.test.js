import { render, screen } from '@testing-library/react';
import MovieRating from './MovieRating';

describe('Critics passed in as reviwer arg', () => {
    test('Reviwer renders', () => {
        render(<MovieRating reviewer="Critics" />)
    
        expect(screen.getByRole('heading', {
            name: /critics/i
        })).toBeInTheDocument()
    })
    describe('Rendering the score for critics', () => {
        beforeEach(() => {
            render(<MovieRating reviewer="Critics" rating="66"/>)
        })
        test('Metacritic score showing on page', () => {
            expect(screen.getByRole('heading', {
                name: /66/i
            })).toBeInTheDocument()
        })
        test('Score summary showing on page', () => {
            expect(screen.getByRole('heading', {
                name: /Okay/i
            })).toBeInTheDocument()
        })
    })
    test('No rating available for critics', () => {
        render(<MovieRating reviewer="Critics" rating="N/A" />)
        expect(screen.getByRole('heading', {
                name: /Huh\?/i
            })).toBeInTheDocument()
    })
})

describe('Viewers passed in as reviewer arg', () => {
    beforeEach(() => {
        render(<MovieRating reviewer="The People" rating="88"/>)
    })
    test('imdb score showing on page', () => {
        expect(screen.getByRole('heading', {
            name: /88/i
        })).toBeInTheDocument()
    })
    test('The people showing up in page', () => {
        expect(screen.getByRole('heading', {
            name: /The People/i
        })).toBeInTheDocument()
    })
})