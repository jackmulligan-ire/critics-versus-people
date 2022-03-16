import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Container, Row } from 'react-bootstrap';

class ErrorScreen extends React.Component {
    render() {
        return (
            <Container className="d-flex flex-column align-items-center justify-content-center" id="error-screen">
                <Row className="justify-content text-center w-100 mb-4">
                    <h2>Error!</h2>
                    <h4>"{this.props.query}" isn't a movie... yet!</h4>
                </Row>
                <Row id="search-row-error" className="justify-content-center">
                    <SearchBar onSearchQueryChange={this.props.onSearchQueryChange}/>
                </Row>
            </Container>
        )
    }
}

export default ErrorScreen