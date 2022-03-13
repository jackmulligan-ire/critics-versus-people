import React from 'react';
import { Row, Col } from 'react-bootstrap';

class MovieSummary extends React.Component {
    render() {
        const imdbLink = `https://www.imdb.com/title/${this.props.imdbID}/`
        return (
            <Row id="summary-row" className="mt-2">
                <Col className="p-0 d-flex flex-column justify-content-end summary-para-col">
                    <p>{this.props.plot}</p>
                    <p>Director: {this.props.director}<br />
                    Actors: {this.props.actors}</p>
                    <p className="m-0">View on <a href={imdbLink} target="_blank">IMDB</a></p>
                </Col>
                <Col className="p-0 d-flex justify-content-end">
                    <img src={this.props.poster} height="250" width="200"/>
                </Col>
            </Row>
        )
    }
}

export default MovieSummary;