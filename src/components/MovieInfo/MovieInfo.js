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
                <MovieTitle title={this.state.movieData.Title} year={this.state.movieData.Year} />
                <Row className="w-100 m0 mt-sm-2" id="ratings-row">
                    <MovieRating reviewer="Critics" rating={this.state.movieData.Metascore} />
                    <MovieRating reviewer="Viewers" rating={this.state.movieData.imdbRating * 10} />
                </Row>
                <MovieSummary 
                    plot={this.state.movieData.Plot} 
                    director={this.state.movieData.Director}
                    actors={this.state.movieData.Actors}
                    imdbID={this.state.movieData.imdbID}
                    poster={this.state.movieData.Poster}
                />
            </Container>
        )
    }
}

export default MovieInfo;