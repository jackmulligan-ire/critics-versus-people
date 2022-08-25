import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import AboutModal from "../AboutModal/AboutModal";
import SearchBar from "../SearchBar/SearchBar";

class SiteNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSiteReset = this.handleSiteReset.bind(this);
  }

  handleSiteReset() {
    this.props.onSearchQueryChange("");
  }

  render() {
    return (
      <Navbar className="border-bottom justify-content-between" variant="dark">
        <Button
          className="navbar-brand ms-2 ms-xl-3 me-1"
          onClick={this.handleSiteReset}
        >
          Critics vs. The People
        </Button>
        <Nav className="justify-content-between w-100">
          <Button onClick={this.props.onModalChange}>About</Button>
          <div className="d-none d-md-block mx-3 w-50">
            <SearchBar onSearchQueryChange={this.props.onSearchQueryChange} />
          </div>
        </Nav>
        <AboutModal
          onModalChange={this.props.onModalChange}
          show={this.props.showModal}
        />
      </Navbar>
    );
  }
}

export default SiteNavbar;
