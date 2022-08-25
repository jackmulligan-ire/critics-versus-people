import React from "react";
import Col from "react-bootstrap/Col";

class MovieRating extends React.Component {
  constructor(props) {
    super(props);
    this.getReviewBoxContent = this.getReviewBoxContent.bind(this);
  }

  getReviewBoxContent(score) {
    if (score >= 85) {
      return { summary: "Great", hexcode: "#11FFEE" };
    } else if (score >= 70) {
      return { summary: "Good", hexcode: "#1CE815" };
    } else if (score >= 50) {
      return { summary: "Okay", hexcode: "#FFF01E" };
    } else if (score >= 25) {
      return { summary: "Bad", hexcode: "#FFAD00" };
    } else if (score >= 0) {
      return { summary: "Awful", hexcode: "#F00" };
    } else {
      return { summary: "Huh?", hexcode: "#F6E495" };
    }
  }

  render() {
    const scoreSummary = this.getReviewBoxContent(this.props.rating).summary;
    const reviewBoxStyle = {
      backgroundColor: this.getReviewBoxContent(this.props.rating).hexcode,
    };
    return (
      <Col md={6} className="d-flex mt-2 m-md-0 flex-column align-items-center">
        <h2 className="m-0">{this.props.reviewer}</h2>
        <div
          style={reviewBoxStyle}
          className="d-flex flex-column align-items-center justify-content-center review-box"
        >
          <h2>{this.props.rating}</h2>
          <h2>{scoreSummary}</h2>
        </div>
      </Col>
    );
  }
}

export default MovieRating;
