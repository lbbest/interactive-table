import React, { Component } from "react";

export default class TableHeader extends Component {
  // state to hold original column names and whether to show/hide rename div
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      showRename: false,
    };
  }

  // when component mounts, set the column name as name stored in localstorage
  // localstorage used to persist column name on page refresh
  componentDidMount() {
    this.setState({
      name:
        localStorage.getItem(`column-${this.props.name}`) || this.props.name,
    });
  }

  // change handler function to set renamed column in state from user's input value
  // new name also stored in localstorage
  onChange = (event) => {
    this.setState({ name: event.target.value });
    localStorage.setItem(`column-${this.props.name}`, event.target.value);
  };

  render() {
    return (
      <div className="column-header-div">
        {/*renders chosen column name from state*/}
        <p className="column-header-name">{this.state.name}</p>
        {/*div to hold header buttons*/}
        <div className="header-btns-div">
          {/*button to show/hide rename div*/}
          <button
            className="show-rename-btn"
            // conditionally style button if rename input is active for user clarity
            style={{
              backgroundColor: this.state.showRename ? "white" : "transparent",
              color: this.state.showRename ? "#151515" : "white",
            }}
            // when button is clicked, set state to show/hide rename input
            onClick={() => {
              this.setState({
                showRename: !this.state.showRename,
              });
            }}
          >
            ✎
          </button>
          {/*feature of SortablePane library: class name "drag-handle" defines where user can grab columns to reorder them*/}
          <button className="drag-handle">☰</button>
        </div>
        {/*rename div*/}
        <div
          className="rename-div"
          // change display style based on showRename state (show/hide)
          style={{
            display: this.state.showRename ? "block" : "none",
            position: "absolute",
          }}
        >
          {/*textbox for entering desired column name*/}
          <input
            className="rename-input"
            type="text"
            value={this.state.name}
            // onchange function sets this.state.name as input's value
            onChange={this.onChange}
          ></input>
          {/*button to reset to original column name*/}
          <button
            className="rename-reset-btn"
            // on button click save this.state.name as original name passed down to component as prop
            onClick={this.onChange}
            value={this.props.name}
          >
            &#8634;
          </button>
        </div>
      </div>
    );
  }
}
