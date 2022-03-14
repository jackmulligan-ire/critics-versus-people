import React from 'react';
import { Row, Form, Button } from 'react-bootstrap';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    }
    
    handleSearchQueryChange(e) {
        e.preventDefault();
        const query = e.target[0].value;
        this.props.onSearchQueryChange(query);
    }

    async getMovieJSON(query) {
        const movieString = query.split(" ").join("+");
        const queryString = `http://www.omdbapi.com/?apikey=d6c3d2ef&t=${movieString}`;
        const response = await fetch(queryString);
        const json = await response.json();
        const movieJSON = this.getMovieJSON(query)
                        .then(json => json);
        return json
    }

    render () {
        return (
                <Form 
                className="w-75"
                onSubmit={this.handleSearchQueryChange}
                >
                    <Form.Control 
                    className="px-3 py-2"
                    type="text"
                    placeholder='Enter a movie'
                    aria-label='Enter a movie'
                    />
                </Form>
        )
    }
}

export default SearchBar;