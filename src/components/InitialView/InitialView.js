import React from 'react';
import Logo from '../Logo/Logo';
import Motto from '../Motto/Motto';
import SearchBar from '../SearchBar/SearchBar';

class InitialView extends React.Component {
    render() {
        return (
            <main>
                <Logo />
                <SearchBar />
                <Motto />
            </main>
        );
    }
}

export default InitialView;