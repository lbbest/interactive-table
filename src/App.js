import React, { Component } from "react";
import "./App.css";
import { SortablePane, Pane } from "react-sortable-pane";
import TableColumn from "./TableColumn";
import tableData1 from "./mock_data.json";
import tableData2 from "./mock_data_2.json";

// switch between tableData1 and tableData2 here to demonstrate scalability of code (i.e. can handle different number of rows and columns)
const data = tableData2;

export default class App extends Component {
  // function to render each table column
  renderColumns() {
    // set variable to hold all unique json keys in data
    let keys = Object.keys(data[0]);
    // map through keys and for each one, return a column
    return keys.map((column, index) => {
      return (
        // Pane is external library drag and drop component
        <Pane
          key={index}
          defaultSize={{ width: "300px", height: "auto" }}
          resizable={{ x: false, y: false }}
        >
          {/*table column data and name are passed down to TableColumn component as props*/}
          <TableColumn key={index} name={column} data={data} />
        </Pane>
      );
    });
  }

  render() {
    return (
      // container for table
      <table className="table-container">
        {/*SortablePane is drag-drop context area for Panes*/}
        <SortablePane
          style={{ width: "auto", height: "auto" }}
          dragHandleClassName="drag-handle"
          disableEffect="true"
          direction="horizontal"
          margin={0}
        >
          {/*call function which renders table column Panes inside SortablePane*/}
          {this.renderColumns()}
        </SortablePane>
      </table>
    );
  }
}
