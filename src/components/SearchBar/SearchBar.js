import React from 'react';
import { Row, Form, Button } from 'react-bootstrap';

class SearchBar extends React.Component {
    render () {
        return (
            <Row>
                <Form>
                    <Form.Control 
                    className="px-3 py-2"
                    type="text"
                    placeholder='Enter a movie'
                    aria-label='Enter a movie'
                    />
                </Form>
            </Row>
        )
    }
}

export default SearchBar;