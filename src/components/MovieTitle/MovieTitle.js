import React from 'react';

class MovieTitle extends React.Component {
    render() {
        const movieTitle = `${this.props.title} (${this.props.year})`

        return (
            <h2>{movieTitle}</h2>
        )
    }
}

export default MovieTitle;