import React from "react";

// componentDidMount() {
//     const fetchMovieData = async () => {
//         const movieString = this.props.query.split(" ").join("+");
//         const queryString = `http://www.omdbapi.com/?apikey=d6c3d2ef&t=${movieString}`;
//         const response = await fetch(queryString);
//         const json = await response.json();
//         this.setState({
//             movieData: json,
//         })
//     }
//     fetchMovieData();
// }

class LoadScreen extends React.Component {
    render() {
        return (
            <h1>Loading</h1>
        )
    }
}

export default LoadScreen;