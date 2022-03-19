import React from 'react';
import { Row, Col } from 'react-bootstrap';

class MovieSummary extends React.Component {
    render() {
        const imdbLink = `https://www.imdb.com/title/${this.props.imdbID}/`
        const altDesc = `${this.props.title} Poster`;
        return (
            <Row id="summary-row" className="mt-0 mt-md-3 mb-5 w-75">
                <Col md={6} className="p-0 d-flex flex-column justify-content-between align-items-center">
                    {
                    this.props.plot !== "N/A" ?
                    <div id="summary-content">
                        <p id="plot-para">{this.props.plot}</p>
                        <p>Director: {this.props.director}<br />
                        Actors: {this.props.actors}</p>
                    </div> :
                    <div>{null}</div>
                    }
                    <p className="m-0">View on <a href={imdbLink} target="_blank" rel="noreferrer">IMDB</a></p>
                </Col>
                <Col md={6} className="p-0 mt-3 mt-md-0 d-flex justify-content-center">
                    {
                    this.props.poster === "N/A" ?
                    <div>{null}</div>:   
                    <img id="poster" src={this.props.poster} alt={altDesc}/>
                    }
                </Col>
            </Row>
        )
    }
}

export default MovieSummary;