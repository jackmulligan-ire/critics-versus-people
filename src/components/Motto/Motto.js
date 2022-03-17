import React from 'react';
import { Row } from 'react-bootstrap';

class Motto extends React.Component {
    constructor(props) {
        super(props)
        this.getMottoPhrase = this.getMottoPhrase.bind(this);
    }

    getMottoPhrase() {
        const redColor = {
            color: '#F00'
        };
        const greenColor = {
            color: '#1CE815'
        };
        const beigeColor = {
            color: "#F6E495"
        };
        const yellowColor = {
            color: "#FFF01E"
        };
        const mottoPhrases = [
            <h4 className="text-center">They <span style={redColor}>panned</span> it, you <span style={greenColor}> stan</span> it.</h4>,  
            <h4 className="text-center">They're like <span style={beigeColor}>'Huh?'</span>, you say <span style={greenColor}> 'Bruh!'</span>.</h4>,
            <h4 className="text-center">They say it's <span style={greenColor}>a classic</span>, you think it's <span style={redColor}> tragic</span>.</h4>,
            <h4 className="text-center">You think it <span style={greenColor}>rocked</span>, they say it <span style={redColor}> sucked</span>!</h4>,
            <h4 className="text-center">They <span style={redColor}>hate</span> it, you <span style={greenColor}>love</span> it.</h4>,
            <h4 className="text-center">You think it's <span style={yellowColor}>fine</span>, they think it's <span style={greenColor}> sublime</span>.</h4>,
            <h4 className="text-center">They <span style={beigeColor}>ignored</span> it, you <span style={greenColor}>adored</span> it.</h4>,
        ]
        
        const randomNumber = Math.floor(Math.random() * (mottoPhrases.length - 1));
        return mottoPhrases[randomNumber]
    }

    render() {
        return (
            <Row >
                {this.getMottoPhrase()}
            </Row>
        )
    }
}

export default Motto;