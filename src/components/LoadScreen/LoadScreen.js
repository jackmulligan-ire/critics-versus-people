import React from "react";
import { Row, Container } from "react-bootstrap";
import loader from "../../images/white-spinner.gif";


class LoadScreen extends React.Component {
    async componentDidMount() {
        const fetchMovieData = async () => {
            const movieString = this.props.query.split(" ").join("+");
            const queryString = `http://www.omdbapi.com/?apikey=d6c3d2ef&t=${movieString}`;
            const response = await fetch(queryString);
            const json = await response.json();
            return json
        }
        const json = await fetchMovieData();
        setTimeout(() => this.props.onAPIReturn(json), 1000)
    }

    render() {
        return (
            <Container className="d-flex flex-column justify-content-center">
                <Row className="justify-content-center">
                    <img className="p-0" id="film-reel" src={loader} />
                    <h5 className="text-center">Peering into telescope to view stars given...</h5>
                </Row>
            </Container>
        )
    }
}

export default LoadScreen;