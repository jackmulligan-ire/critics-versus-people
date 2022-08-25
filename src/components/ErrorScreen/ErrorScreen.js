import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Container, Row } from "react-bootstrap";

class ErrorScreen extends React.Component {
  render() {
    return (
      <Container
        className="d-flex flex-column align-items-center justify-content-center"
        id="error-screen"
      >
        <Row className="justify-content text-center w-100">
          <h2>It's a flop!</h2>
          {this.props.errorData.Error === "Movie not found!" ? (
            <h4>"{this.props.query}" isn't a movie... yet.</h4>
          ) : (
            <h4>Something went wrong with your search "{this.props.query}".</h4>
          )}
        </Row>
        <Row
          cid="search-row-error"
          className="justify-content-center w-75 d-flex d-md-none"
        >
          <SearchBar onSearchQueryChange={this.props.onSearchQueryChange} />
        </Row>
      </Container>
    );
  }
}

export default ErrorScreen;
