import { Component } from "react";
import "./style.css";

const allColors = [
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#33B5FF",
  "#FF33FF",
  "#FFFF33",
  "#33FFFF",
  "#A0A0A0",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#00FFFF",
  "#FF9900",
  "#9900FF",
  "#0099FF",
  "#333333",
];

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showColors: false,
      selectedColor: null,
      backgroundColor: "white",
    };
  }

  handleButtonClick = () => {
    this.setState({
      showColors: !this.state.showColors,
    });
  };

  handleColorClick = (color) => {
    this.setState({
      showColors: false,
      selectedColor: color,
      backgroundColor: color,
    });
  };

  render() {
    const { showColors, selectedColor, backgroundColor } = this.state;

    return (
      <div className="container">
        Color Picker
        <div className="color-picker" style={{ backgroundColor }}>
          <button className="pick-button" onClick={this.handleButtonClick}>
            Pick a color
          </button>

          {/* Display the color list when 'showColors' is true */}
          {showColors && (
            <div className="color-list">
              {allColors.map((color, index) => (
                <div
                  key={index}
                  className="color-item"
                  style={{ backgroundColor: color }}
                  onClick={() => this.handleColorClick(color)}
                ></div>
              ))}
            </div>
          )}
          {/* Display the selected color when 'selectedColor' is not null */}
          {selectedColor && (
            <div className="selected-color">
              You picked:{" "}
              <div
                className="color-box"
                style={{ backgroundColor: selectedColor }}
              >
                {selectedColor}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
