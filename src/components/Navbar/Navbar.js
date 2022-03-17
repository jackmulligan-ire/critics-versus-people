import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class SiteNavbar extends React.Component {
    constructor(props) {
        super(props)

    this.handleSiteReset = this.handleSiteReset.bind(this);
    }

    handleSiteReset() {
        this.props.onSearchQueryChange("");
    }

    render() {
        return (
            <Navbar className="border-bottom" variant="dark">
                <Navbar.Brand onClick={this.handleSiteReset} className="mx-3">Critics vs. Viewers</Navbar.Brand>
                <Nav className="justify-content-end w-100">
                    <Button id="about-button" className="mx-4">About</Button>
                </Nav>
            </Navbar>
    
        )
    }
}

export default SiteNavbar;