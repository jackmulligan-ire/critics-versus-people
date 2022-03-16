import { render, screen } from '@testing-library/react';
import ErrorScreen from './ErrorScreen';

const errorObject = {
    Response: 'False',
    Error: 'Unknown error',
}

test('Error message shows up on the screen', () => {
    render(<ErrorScreen errorData={errorObject}/>)
    expect(screen.getByRole('heading', {
        name: /it's a flop/i
    })).toBeInTheDocument()
})

test('Name of movie shows up in error message', () => {
    const notfoundObject = {
        Response: 'False',
        Error: 'Movie not found!',
    }
    render(<ErrorScreen query="silly silly movie" errorData={notfoundObject}/>)
    expect(screen.getByText(/"silly silly movie" isn't a movie/)).
    toBeInTheDocument()
})

test('Search bar renders on page', () => {
    render(<ErrorScreen query="silly silly movie" errorData={errorObject}/>)
    expect(screen.getByRole('textbox', {
        name: /enter a movie/i
    })).toBeInTheDocument()
})

test('Error during the API call', () => {
    render(<ErrorScreen query="Finding Nemo" errorData={errorObject}/>)

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
})