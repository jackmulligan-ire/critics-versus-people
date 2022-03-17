import React from 'react';
import { Row } from 'react-bootstrap';

class Motto extends React.Component {
    constructor(props) {
        super(props)
        this.getMottoPhrase = this.getMottoPhrase.bind(this);
        this.getMottoPhrasesLength = this.getMottoPhrasesLength.bind(this);
    }

    spanColors = {
        "red" : {color: '#F00'},
        "green": {color: '#1CE815'},
        "beige": {color: "#F6E495"},
        "yellow": {color: "#FFF01E"}
    };

    mottoPhrases = [
        <h4 className="text-center">They <span style={this.spanColors.red}>panned</span> it, you <span style={this.spanColors.green}> stanned</span> it.</h4>,  
        <h4 className="text-center">They're like <span style={this.spanColors.beige}>'Huh?'</span>, you say <span style={this.spanColors.green}> 'Bruh!'</span>.</h4>,
        <h4 className="text-center">They say it's <span style={this.spanColors.green}>a classic</span>, you think it's <span style={this.spanColors.red}> tragic</span>.</h4>,
        <h4 className="text-center">You think it <span style={this.spanColors.green}>rocked</span>, they say it <span style={this.spanColors.red}> sucked</span>!</h4>,
        <h4 className="text-center">They <span style={this.spanColors.red}>hate</span> it, you <span style={this.spanColors.green}>love</span> it.</h4>,
        <h4 className="text-center">You think it's <span style={this.spanColors.yellow}>fine</span>, they think it's <span style={this.spanColors.green}> sublime</span>.</h4>,
        <h4 className="text-center">They <span style={this.spanColors.beige}>ignored</span> it, you <span style={this.spanColors.green}>adored</span> it.</h4>,
    ];

    getMottoPhrase(seed) {      
        return this.mottoPhrases[seed]
    }

    getMottoPhrasesLength() {
        return this.mottoPhrases.length;
    }

    render() {
        const phraseSeed = Math.floor(Math.random() * this.getMottoPhrasesLength())
        return (
            <Row >
                {this.getMottoPhrase(phraseSeed)}
            </Row>
        )
    }
}

export default Motto;