import React from "react";
import { Row } from "react-bootstrap";

class Motto extends React.Component {
  constructor(props) {
    super(props);
    this.getMottoPhrase = this.getMottoPhrase.bind(this);
    this.getMottoPhrasesLength = this.getMottoPhrasesLength.bind(this);
  }

  spanColors = {
    red: { color: "#F00" },
    green: { color: "#1CE815" },
    yellow: { color: "#FFF01E" },
  };

  mottoPhrases = [
    <h4 className="text-center">
      They <span style={this.spanColors.red}>panned</span> it, we{" "}
      <span style={this.spanColors.green}>stan</span> it
    </h4>,
    <h4 className="text-center">
      They're like <span style={this.spanColors.yellow}>'Huh?'</span>, we say{" "}
      <span style={this.spanColors.green}>'Bruh!'</span>
    </h4>,
    <h4 className="text-center">
      They say it's <span style={this.spanColors.green}>a classic</span>, we
      think it's <span style={this.spanColors.red}>tragic</span>
    </h4>,
    <h4 className="text-center">
      We think it <span style={this.spanColors.green}>rocked</span>, they say it{" "}
      <span style={this.spanColors.red}>sucked!</span>
    </h4>,
    <h4 className="text-center">
      They <span style={this.spanColors.red}>hate</span> it, we{" "}
      <span style={this.spanColors.green}>love</span> it
    </h4>,
    <h4 className="text-center">
      They say it's <span style={this.spanColors.yellow}>okay</span>, we thought
      it <span style={this.spanColors.green}>slayed!</span>
    </h4>,
    <h4 className="text-center">
      They <span style={this.spanColors.yellow}>ignored</span> it, we{" "}
      <span style={this.spanColors.green}>adored</span> it
    </h4>,
  ];

  getMottoPhrase(seed) {
    return this.mottoPhrases[seed];
  }

  getMottoPhrasesLength() {
    return this.mottoPhrases.length;
  }

  render() {
    const phraseSeed = Math.floor(Math.random() * this.getMottoPhrasesLength());
    return <Row className="mb-4">{this.getMottoPhrase(phraseSeed)}</Row>;
  }
}

export default Motto;
