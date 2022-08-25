import React from "react";
import Row from "react-bootstrap/Row";

class MovieTitle extends React.Component {
  render() {
    const movieTitle = `${this.props.title} (${this.props.year})`;

    return (
      <Row className="m-0 mt-md-3" id="title-row">
        <h2 className="text-center fw-bold">{movieTitle}</h2>
      </Row>
    );
  }
}

export default MovieTitle;
