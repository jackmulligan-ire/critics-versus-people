import React from "react";
import { Row, Container } from "react-bootstrap";
import loader from "../../images/white-spinner.gif";


class LoadScreen extends React.Component {
    constructor(props) {
        super(props)
        this.getLoadPhrase = this.getLoadPhrase.bind(this);
        this.getLoadPhrasesLength = this.getLoadPhrasesLength.bind(this);
    }

    async componentDidMount() {
        const fetchMovieData = async () => {
            try {
                const movieString = this.props.query.split(" ").join("+");
                const queryString = `http://www.omdbapi.com/?apikey=d6c3d2ef&t=${movieString}`;
                const response = await fetch(queryString);
                const json = await response.json();
                if ('imdbRating' in json) json.imdbRating = json.imdbRating.replace(".", "")
                return json
            } catch (err) {
                // For internal error handling
                console.log(err)
                const errorObject = {
                    Response: 'False',
                    Error: 'Unknown error',
                }
                return errorObject
            }
        }
        const json = await fetchMovieData();
        setTimeout(() => this.props.onAPIReturn(json), 1000)
    }

    loadPhrases = [
        <h5 className="text-center">Counting number of thumbs currently up...</h5>,
        <h5 className="text-center">Collecting tomato residue for analysis...</h5>,
        <h5 className="text-center">Scanning obscure blogs from 2007...</h5>,
        <h5 className="text-center">Viewing stars given in telescope...</h5>,
        <h5 className="text-center">Waiting for last judge to raise placard...</h5>,
    ];

    getLoadPhrase(seed) {
        return this.loadPhrases[seed];
    }

    getLoadPhrasesLength() {
        return this.loadPhrases.length;
    }

    render() {
        const phraseSeed = Math.floor(Math.random() * this.getLoadPhrasesLength());
        return (
            <Container className="d-flex flex-column justify-content-center">
                <Row className="justify-content-center">
                    <img className="p-0" id="film-reel" src={loader} />
                    {this.getLoadPhrase(phraseSeed)}
                </Row>
            </Container>
        )
    }
}

export default LoadScreen;