import React from 'react';
import SiteNavbar from '../Navbar/Navbar';
import MovieInfo from '../MovieInfo/MovieInfo';
import LoadScreen from '../LoadScreen/LoadScreen';


class ResultsView extends React.Component {
    render() {
        return (
            <div id="results-view">
                <SiteNavbar />
                {Object.keys(this.props.movieData).length === 0 ?
                <LoadScreen 
                query={this.props.query}
                onAPIReturn={this.props.onAPIReturn} /> : 
                <MovieInfo
                movieData={this.props.movieData}
                onSearchQueryChange={this.props.onSearchQueryChange} />}
            </div>
        )
    }
}

export default ResultsView;