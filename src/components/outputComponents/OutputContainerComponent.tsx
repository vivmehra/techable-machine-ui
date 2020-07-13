import * as React from "react";
import ObjectHeaderComponent from "./OutputHeaderComponent";
import OutputBodyComponent from "./OutputBodyComponent";

class OutputContainerComponent extends React.Component {
  render() {
    return (
      <div
        className="rounded m-4"
        style={{
          backgroundColor: "#eee",
          borderRadius: "200px",
          width: "100%",
          textAlign: "center",
          display: "inline-block",
          paddingTop: "40px",
        }}
      >
        <ObjectHeaderComponent />
        <hr />
        <OutputBodyComponent />
      </div>
    );
  }
}
export default OutputContainerComponent;
