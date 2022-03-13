import React from 'react';
import Col from 'react-bootstrap/Col';

class MovieRating extends React.Component {
    getScoreSummary(score) {
        if (score >= 90) {
            return "Incredible!";
        } else if (score >= 75) {
            return "Good.";
        } else if (score >= 50) {
            return "Okay.";
        } else if (score >= 25) {
            return "Bad."
        } else {
            return "Terrible!"
        }
    }

    render() {
        const scoreSummary = this.getScoreSummary(this.props.rating);
        return (
                <Col className="d-flex flex-column align-items-center">
                    <h2 className="m-0">{this.props.reviewer}</h2>
                    <div className="border w-75 d-flex flex-column align-items-center justify-content-center review-box">
                        <h2>{this.props.rating}</h2>
                        <h2>{scoreSummary}</h2>
                    </div>
                </Col>
        )
    }
}

export default MovieRating;