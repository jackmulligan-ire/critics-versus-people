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
            this.props.onAPIReturn(json)
        });
    }

    render() {
        return (
            <h1>Loading</h1>
        )
    }
}

export default LoadScreen;