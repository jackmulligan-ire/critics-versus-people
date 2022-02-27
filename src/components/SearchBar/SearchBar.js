import React from 'react';
import { Row, Form, Button } from 'react-bootstrap';

class SearchBar extends React.Component {
    render () {
        return (
            <Row>
                <Form>
                    <Form.Control 
                    type="text"
                    placeholder='Enter a movie'
                    aria-label='Enter a movie'
                    />
                    <Button 
                    variant="primary"
                    type="submit">Get the verdict</Button>
                </Form>
            </Row>
        )
    }
}

export default SearchBar;