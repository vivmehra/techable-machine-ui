import * as React from "react";
import Button from "@material-ui/core/Button";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import { connect } from "react-redux";

type Props = {
  isModelTrained: boolean;
};
class OutputHeaderComponent extends React.Component<Props> {
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
            disabled={!this.props.isModelTrained}
            style={{ marginBottom: "10px" }}
          >
            <PublishOutlinedIcon fontSize="small" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Export Model
          </Button>
        </span>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isModelTrained: state.isModelTrained,
  };
};
export default connect(mapStateToProps)(OutputHeaderComponent);
