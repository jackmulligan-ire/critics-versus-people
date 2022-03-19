import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

class AboutModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>About Critics vs. The People</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>The following data from the Open Movie Database are used to generate the ratings:</p>
                    <ul>
                        <li>Critics: Average score from <a href="https://www.metacritic.com/" target="_blank" rel="noreferrer">Metacritic</a>.</li>
                        <li>The People: Average score from <a href="https://www.imdb.com/" target="_blank" rel="noreferrer">IMDb</a>.</li>
                    </ul>
                    <p>Additional data taken from IMDb and Amazon (posters) via OMDb (<a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel='noreferrer'>CC BY-NC 4.0</a>).</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onModalChange}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default AboutModal;