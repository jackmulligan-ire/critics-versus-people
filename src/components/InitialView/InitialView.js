import React from "react";
import Logo from "../Logo/Logo";
import Motto from "../Motto/Motto";
import SearchBar from "../SearchBar/SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class InitialView extends React.Component {
  render() {
    return (
      <Container
        id="initial-container"
        className="w-100 d-flex flex-column justify-content-center align-items-center"
      >
        <Logo />
        <Motto />
        <Row className="d-flex justify-content-center w-75">
          <SearchBar onSearchQueryChange={this.props.onSearchQueryChange} />
        </Row>
      </Container>
    );
  }
}

export default InitialView;
