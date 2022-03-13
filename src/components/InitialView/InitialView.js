import React from 'react';
import Logo from '../Logo/Logo';
import Motto from '../Motto/Motto';
import SearchBar from '../SearchBar/SearchBar';
import Container from 'react-bootstrap/Container';

class InitialView extends React.Component {
    render() {
        return (
            <Container className="mt-5 w-75 d-flex flex-column justify-content-evenly align-items-center">
                <Logo />
                <SearchBar />
                <Motto />
            </Container>
        );
    }
}

export default InitialView;