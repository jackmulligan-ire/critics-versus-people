import React from 'react';
import SiteNavbar from '../Navbar/Navbar';
import MovieInfo from '../MovieInfo/MovieInfo';
import LoadScreen from '../LoadScreen/LoadScreen';
import ErrorScreen from '../ErrorScreen/ErrorScreen';


class ResultsView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
        }
        this.handleModalChange = this.handleModalChange.bind(this);
    }

    handleModalChange() {
        this.setState(state => {
            return {showModal: !state.showModal}
        })
    }

    render() {
        return (
            <div id="results-view">
                <SiteNavbar 
                onSearchQueryChange={this.props.onSearchQueryChange}
                showModal={this.state.showModal}
                onModalChange={this.handleModalChange}/>
                {
                Object.keys(this.props.movieData).length === 0 ?

                <LoadScreen 
                query={this.props.query}
                onAPIReturn={this.props.onAPIReturn} /> :

                this.props.movieData.Response === "False" ? 

                <ErrorScreen 
                query={this.props.query} 
                onSearchQueryChange={this.props.onSearchQueryChange}
                errorData={this.props.movieData}/> :

                <MovieInfo
                movieData={this.props.movieData}
                onSearchQueryChange={this.props.onSearchQueryChange} />
                }
            </div>
        )
    }
}

export default ResultsView;