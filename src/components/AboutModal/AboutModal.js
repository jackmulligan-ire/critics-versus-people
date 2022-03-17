import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

class AboutModal extends React.Component {
    render() {
        return (
            <Modal show={true}>
                <Modal.Header>
                    <Modal.Title>About Critics vs. Viewers</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>The following datapoints from the content's entry in the Open Movie Database are used to generate ratings:</p>
                    <ul>
                        <li>Critics: Average critic score from <a href="https://www.metacritic.com/" target="_blank" rel="noreferrer">Metacritic</a>.</li>
                        <li>Viewers: Average viewer score from <a href="https://www.imdb.com/" target="_blank" rel="noreferrer">IMDB</a></li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default AboutModal;