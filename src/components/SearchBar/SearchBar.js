import React from 'react';
import Form from 'react-bootstrap/Form';

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