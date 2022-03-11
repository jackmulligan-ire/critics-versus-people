import React from 'react';
import { Row, Col } from 'react-bootstrap';

class MovieSummary extends React.Component {
    render() {
        const imdbLink = `https://www.imdb.com/title/${this.props.imdbID}/`
        return (
            <Row id="movie-summary">
                <Col>
                    <p>{this.props.plot}</p>
                    <p>Director: {this.props.director}<br />
                    Actors: {this.props.actors}</p>
                    <p>View on <a href={imdbLink} target="_blank">IMDB</a></p>
                </Col>
                <Col>
                    <img src={this.props.poster} height="300" width="250"/>
                </Col>
            </Row>
        )
    }
}

export default MovieSummary;