import React from 'react';
import Logo from '../Logo/Logo';
import Motto from '../Motto/Motto';
import SearchBar from '../SearchBar/SearchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class InitialView extends React.Component {
    render() {
        return (
            <Container className="mt-5 w-75 d-flex flex-column justify-content-evenly align-items-center">
                <Logo />
                <Row id="search-row-initial" className="d-flex justify-content-center w-75">
                    <SearchBar onSearchQueryChange={this.props.onSearchQueryChange}/>
                </Row>
                <Motto />
            </Container>
        );
    }
}

export default InitialView;