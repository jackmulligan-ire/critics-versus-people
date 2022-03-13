import React from 'react';
import SiteNavbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import MovieTitle from '../MovieTitle/MovieTitle';
import MovieRating from '../MovieRating/MovieRating';
import MovieSummary from '../MovieSummary/MovieSummary';
import { Container, Row } from 'react-bootstrap';

class ResultsView extends React.Component {
    render() {
        return (
            <div id="results-view">
                <SiteNavbar />
                <Container className="w-75 d-flex flex-column align-items-center">
                    <Row id="search-row" className="w-100 d-flex justify-content-center my-3">
                        <SearchBar />
                    </Row>
                    <MovieTitle title={this.props.data.Title} year={this.props.data.Year} />
                    <Row className="w-100 mt-2" id="ratings-row">
                        <MovieRating reviewer="Critics" rating={this.props.data.Metascore} />
                        <MovieRating reviewer="Viewers" rating={this.props.data.imdbRating} />
                    </Row>
                    <MovieSummary 
                        plot={this.props.data.Plot} 
                        director={this.props.data.Director}
                        actors={this.props.data.Actors}
                        imdbID={this.props.data.imdbID}
                        poster={this.props.data.Poster}
                    />
                </Container>
            </div>
        )
    }
}

export default ResultsView;