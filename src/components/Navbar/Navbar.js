import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class SiteNavbar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Critics vs. Viewers</Navbar.Brand>
                </Container>
            </Navbar>
    
        )
    }
}

export default SiteNavbar;