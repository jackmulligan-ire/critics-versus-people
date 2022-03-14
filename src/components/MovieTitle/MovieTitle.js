import React from 'react';
import Row from 'react-bootstrap/Row';

class MovieTitle extends React.Component {
    render() {
        const movieTitle = `${this.props.title} (${this.props.year})`

        return (
            <Row className="my-2" id="title-row">
                <h2 className="text-center bold-text">{movieTitle}</h2>
            </Row>
        )
    }
}

export default MovieTitle;