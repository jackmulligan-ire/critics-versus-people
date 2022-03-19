import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <footer className="d-flex justify-content-center align-items-center">
                <p className="m-0">Powered by <a href="http://www.omdbapi.com/" target="_blank" rel="noreferrer">OMDb API</a></p>
            </footer>
        )
    }
}

export default Footer;