import React from 'react';
import SiteNavbar from '../Navbar/Navbar';
import MovieInfo from '../MovieInfo/MovieInfo';
import LoadScreen from '../LoadScreen/LoadScreen';


class ResultsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: {},
        }
    }

    render() {
        return (
            <div id="results-view">
                <SiteNavbar />
                {Object.keys(this.props.movieData).length === 0 ? <LoadScreen /> : <MovieInfo />}
            </div>
        )
    }
}

export default ResultsView;