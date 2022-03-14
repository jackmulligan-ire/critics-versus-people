import React from 'react';
import SiteNavbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import MovieTitle from '../MovieTitle/MovieTitle';
import MovieRating from '../MovieRating/MovieRating';
import MovieSummary from '../MovieSummary/MovieSummary';
import { Container, Row } from 'react-bootstrap';

class ResultsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: {},
        }
    }

    componentDidMount() {
        const fetchMovieData = async () => {
            const movieString = this.props.query.split(" ").join("+");
            const queryString = `http://www.omdbapi.com/?apikey=d6c3d2ef&t=${movieString}`;
            const response = await fetch(queryString);
            const json = await response.json();
            this.setState({
                movieData: json,
            })
        }
        fetchMovieData();
    }

    render() {
        return (
            <div id="results-view">
                <SiteNavbar />
                <Container className="w-75 d-flex flex-column align-items-center">
                    <Row id="search-row-results" className="w-100 d-flex justify-content-center my-3">
                        <SearchBar />
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
            </div>
        )
    }
}

export default ResultsView;