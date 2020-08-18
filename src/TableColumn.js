import React, { Component } from "react";
import TableHeader from "./TableHeader";

export default class TableColumn extends Component {
  // state to hold column data from prop passed down
  state = {
    data: this.props.data,
  };

  // function to render rows of column data
  // "key" function argument defines json key to target in data
  renderTableData(key) {
    const data = this.state.data;
    // set new array variable to hold all key:values for table column
    const newArray = [];
    // loop through data and add key:values to array with .push()
    for (let i = 0; i < data.length; i++) {
      newArray.push(data[i][key]);
    }
    // map through array holding key:values
    return newArray.map((item, index) => {
      // return table rows holding each key:value in table cell as item
      return (
        <tr key={index} style={{ height: "auto" }}>
          <td>{item}</td>
        </tr>
      );
    });
  }
  render() {
    // render each table column as table element
    return (
      <table
        className="column-container"
        border="0"
        cellPadding="10px"
        cellSpacing="1px"
      >
        <thead>
          {/*component to handle table header behaviour*/}
          {/*table header name is passed down as prop to component*/}
          <TableHeader name={this.props.name} />
        </thead>
        <tbody className="column-body-container">
          {/*call function which inserts table rows into column returned from renderTableData()*/}
          {/*table data is rendered using key passed in through props to TableColumn*/}
          {this.renderTableData(this.props.name)}
        </tbody>
      </table>
    );
  }
}
