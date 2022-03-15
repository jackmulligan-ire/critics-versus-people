import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MovieTitle from '../MovieTitle/MovieTitle';
import MovieRating from '../MovieRating/MovieRating';
import MovieSummary from '../MovieSummary/MovieSummary';
import { Container, Row } from 'react-bootstrap';

class MovieInfo extends React.Component {
    render() {
        return (
            <Container className="w-75 d-flex flex-column align-items-center">
                <Row id="search-row-results" className="w-100 d-flex justify-content-center my-3">
                    <SearchBar onSearchQueryChange={this.props.onSearchQueryChange}/>
                </Row>
                <MovieTitle title={this.props.movieData.Title} year={this.props.movieData.Year} />
                <Row className="w-100 m0 mt-sm-2" id="ratings-row">
                    <MovieRating reviewer="Critics" rating={this.props.movieData.Metascore} />
                    <MovieRating reviewer="Viewers" rating={this.props.movieData.imdbRating * 10} />
                </Row>
                <MovieSummary 
                    plot={this.props.movieData.Plot} 
                    director={this.props.movieData.Director}
                    actors={this.props.movieData.Actors}
                    imdbID={this.props.movieData.imdbID}
                    poster={this.props.movieData.Poster}
                />
            </Container>
        )
    }
}

export default MovieInfo;