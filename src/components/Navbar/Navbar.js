import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class SiteNavbar extends React.Component {
    render() {
        return (
            <Navbar className="border-bottom" variant="dark">
                <Navbar.Brand className="mx-3">Critics vs. Viewers</Navbar.Brand>
            </Navbar>
    
        )
    }
}

export default SiteNavbar;