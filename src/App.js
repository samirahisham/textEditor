import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    color: "black",
    fontWeight: "",
    fontStyle: "",
    textDecorationLine: "",
    bold: false,
    italic: false,
    underline: false
  };

  changeColor = color => {
    // console.log(this.state.currentColor);
    // let colorstr = color.toString();s
    this.setState({
      color: color
    });
    // console.log(this.state.currentColor);
  };

  changeStyle = style => {
    console.log("change value");
    let fontWeight = this.state.fontWeight;
    let fontStyle = this.state.fontStyle;
    let textDecorationLine = this.state.textDecorationLine;
    let bold = this.state.bold;
    let italic = this.state.italic;
    let underline = this.state.underline;

    if (style === "bold") {
      if (bold) {
        fontWeight = "";
        bold = false;
        console.log(fontWeight);
      } else {
        fontWeight = "bold";
        bold = true;
        console.log(fontWeight);
      }
    }

    if (style === "italic") {
      if (italic) {
        fontStyle = "";
        italic = !italic;
      } else {
        fontStyle = "italic";
        italic = true;
      }
    }

    if (style === "underline") {
      if (underline) {
        textDecorationLine = "";
        underline = !underline;
      } else {
        textDecorationLine = "underline";
        underline = true;
      }
    }

    this.setState({
      fontWeight: fontWeight,
      textDecorationLine: textDecorationLine,
      fontStyle: fontStyle,
      bold: bold,
      italic: italic,
      underline: italic
    });
    console.log(this.state.currentStyle);
  };

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          onClick={() => this.changeStyle(style)}
          style={styles[style]}
          key={style}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      // console.log(color);

      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.changeColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea style={this.state} />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
