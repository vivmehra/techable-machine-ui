import * as React from "react";
import SimpleAccordion from "./Accordion";
import Button from "@material-ui/core/Button";

class TrainModel extends React.Component {
  render() {
    return (
      <div
        className="rounded m-4"
        style={{
          backgroundColor: "#eee",
          borderRadius: "200px",
          // width: "70%",
          textAlign: "center",
          display: "inline-block",
          paddingTop: "40px",
        }}
      >
        <h3>Training</h3>
        <Button
          variant="contained"
          color="primary"
          size="small"
          disabled={true}
          style={{ marginBottom: "10px" }}
        >
          Train Model
        </Button>
        <SimpleAccordion />
      </div>
    );
  }
}
export default TrainModel;
