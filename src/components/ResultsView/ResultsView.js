import React from 'react';
import SiteNavbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import MovieTitle from '../MovieTitle/MovieTitle';
import MovieRating from '../MovieRating/MovieRating';
import { Container, Row, Col } from 'react-bootstrap';

class ResultsView extends React.Component {
    render() {
        return (
            <div id="results-view">
                <SiteNavbar />
                <Container>
                    <Row id="search-row">
                        <SearchBar />
                    </Row>
                    <Row id="title-row">
                        <MovieTitle title={this.props.data.Title} year={this.props.data.Year} />
                    </Row>
                    <Row id="review-row">
                        <Col>
                            <MovieRating reviewer="Critics" rating={this.props.data.Metascore} />
                        </Col>
                        <Col>
                            <MovieRating reviewer="Viewers" rating={this.props.data.imdbRating} />
                        </Col>
                    </Row>
                    <Row id="info-row">
                        
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ResultsView;