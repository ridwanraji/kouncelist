import React from "react";

class RandomCounsel extends React.Component {
  render() {
    // array for style color number
    const colours = [
      "#FFCDD2",
      "#FCE4EC",
      "#F3E5F5",
      "#8C9EFF",
      "#90CAF9",
      "#80D8FF",
      "#80DEEA",
      "#B2DFDB",
      "#69F0AE",
      "#AED581",
      "#AED581",
      "#FFC400",
      "#BCAAA4",
      "#90A4AE"
    ];

    // generate a random number between 0 and length of colors array
    let coloursNum = Math.floor(Math.random() * colours.length);

    // Style for the random counsel.
    const styles = {
      color: colours[coloursNum]
    };
    return (
      <div>
        <p style={styles}>{this.props.counsel}</p>
      </div>
    );
  }
}

export default RandomCounsel;
