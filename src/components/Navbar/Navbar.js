import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

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
            </Navbar>
    
        )
    }
}

export default SiteNavbar;