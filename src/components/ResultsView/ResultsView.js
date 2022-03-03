import React from 'react';
import SiteNavbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import MovieTitle from '../MovieTitle/MovieTitle';
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
                        <MovieTitle title={this.props.data.title} year={this.props.data.year} />
                    </Row>
                    <Row id="review-row">
                        
                    </Row>
                    <Row id="info-row">
                        
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ResultsView;