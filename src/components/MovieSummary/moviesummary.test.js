import { render, screen } from '@testing-library/react';
import MovieSummary from './MovieSummary';

const dummyData = require('../../dummy-data.json');

describe('Dummy data suite', () => {
    beforeEach(() => {
        render(<MovieSummary 
            plot={dummyData['Plot']}
            director={dummyData['Director']}
            actors={dummyData['Actors']}
            imdbID={dummyData['imdbID']}
            poster={dummyData['Poster']} />)
    })
    test('Plot renders', () => {
        expect(screen.getByText(
            /An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more/
            )).toBeInTheDocument()
    })
    test('Director to be on the page', () => {
        expect(screen.getByText(
            /Director: David Fincher/
            )).toBeInTheDocument()
    })
    test('Actors to be on the page', () => {
        expect(screen.getByText(
            /Actors: Brad Pitt, Edward Norton, Meat Loaf/
            )).toBeInTheDocument()
    })
    test('Link on the page', () => {
        expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.imdb.com/title/tt0137523/')
    })
    test('Poster on the page', () => {
        expect(screen.getByRole('img')).toHaveAttribute('src', 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg');
    })
})

