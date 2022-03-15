import React from "react";



class LoadScreen extends React.Component {
    componentDidMount() {
        const fetchMovieData = async () => {
            const movieString = this.props.query.split(" ").join("+");
            const queryString = `http://www.omdbapi.com/?apikey=d6c3d2ef&t=${movieString}`;
            const response = await fetch(queryString);
            const json = await response.json();
            return json
        }
        fetchMovieData().then(json => {
            // Setting delay so loading screen is visible for a little bit
            setTimeout(() => this.props.onAPIReturn(json), 1000)
        });
    }

    render() {
        return (
            <h1>Loading</h1>
        )
    }
}

export default LoadScreen;