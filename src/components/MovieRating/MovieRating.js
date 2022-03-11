import React from 'react';

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
            <div>
                <h2>{this.props.reviewer}</h2>
                <div id="review-box">
                    <h3>{this.props.rating}</h3>
                    <h4>{scoreSummary}</h4>
                </div>
            </div>
        )
    }
}

export default MovieRating;