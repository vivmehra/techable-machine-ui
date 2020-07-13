import * as React from "react";
import Button from "@material-ui/core/Button";

class OutputHeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <h3
          style={{ display: "inline-block", float: "left", marginLeft: "10px" }}
        >
          Preview
        </h3>
        <span style={{ display: "inline-block" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            disabled={false}
            style={{ marginBottom: "10px" }}
          >
            Export Model
          </Button>
        </span>
      </div>
    );
  }
}
export default OutputHeaderComponent;
