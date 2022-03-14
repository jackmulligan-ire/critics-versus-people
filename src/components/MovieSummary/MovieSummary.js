import React from 'react';
import { Row, Col } from 'react-bootstrap';

class MovieSummary extends React.Component {
    render() {
        const imdbLink = `https://www.imdb.com/title/${this.props.imdbID}/`
        return (
            <Row id="summary-row" className="mt-3 mt-sm-2">
                <Col md={6} className="p-0 d-flex flex-column justify-content-center summary-para-col">
                    <p>{this.props.plot}</p>
                    <p>Director: {this.props.director}<br />
                    Actors: {this.props.actors}</p>
                    <p className="m-0">View on <a href={imdbLink} target="_blank">IMDB</a></p>
                </Col>
                <Col md={6} className="p-0 mb-3 mb-sm-0 d-flex justify-content-center justify-content-md-end">
                    <img className="mx-xxl-5" src={this.props.poster}/>
                </Col>
            </Row>
        )
    }
}

export default MovieSummary;