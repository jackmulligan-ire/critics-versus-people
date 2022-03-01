import React from 'react';
import SiteNavbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
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
                        <div>{this.props.data.title}</div>
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