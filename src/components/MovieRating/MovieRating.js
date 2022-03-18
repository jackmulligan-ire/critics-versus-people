import React from 'react';
import Col from 'react-bootstrap/Col';

class MovieRating extends React.Component {
    constructor(props) {
        super(props)

        this.getScoreSummary = this.getScoreSummary.bind(this);
        this.getReviewBackground = this.getReviewBackground.bind(this);
    }

    getScoreSummary(score) {
        if (score >= 85) {
            return "Great";
        } else if (score >= 70) {
            return "Good";
        } else if (score >= 50) {
            return "Okay";
        } else if (score >= 25) {
            return "Bad"
        } else if (score >= 0) {
            return "Awful"
        } else {
            return "Huh?"
        }
    }

    getReviewBackground(score) {
        if (score >= 85) {
            return "#11FFEE";
        } else if (score >= 70) {
            return "#1CE815";
        } else if (score >= 50) {
            return "#FFF01E";
        } else if (score >= 25) {
            return "#FFAD00"
        } else if (score >= 0) {
            return "#F00"
        } else {
            return "#F6E495"
        }
    }

    render() {
        const scoreSummary = this.getScoreSummary(this.props.rating);
        const reviewBoxStyle = {
            backgroundColor: this.getReviewBackground(this.props.rating)
        }
        return (
                <Col md={6} className="d-flex mt-2 m-md-0 flex-column align-items-center">
                    <h2 className="m-0">{this.props.reviewer}</h2>
                    <div style={reviewBoxStyle} className="d-flex flex-column align-items-center justify-content-center review-box">
                        <h2>{this.props.rating}</h2>
                        <h2>{scoreSummary}</h2>
                    </div>
                </Col>
        )
    }
}

export default MovieRating;