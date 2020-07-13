import * as React from "react";
import SimpleAccordion from "./Accordion";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
type Props = {
  canTrainModel: boolean;
  isModelTrained: boolean;
  isTrainingModel: boolean;
  onTrainModelHandler: () => void;
  onMockTrainingModel: () => void;
};

class TrainModel extends React.Component<Props> {
  trainModelClickHandler = () => {
    this.props.onMockTrainingModel();
    setTimeout(() => {
      this.props.onTrainModelHandler();
    }, 10000);
  };
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
          disabled={!this.props.canTrainModel}
          style={{ marginBottom: "10px" }}
          onClick={this.trainModelClickHandler}
        >
          {this.props.isModelTrained ? `Model Trained` : `Train Model`}
        </Button>
        {this.props.isTrainingModel && <p>Training Model....</p>}
        <SimpleAccordion />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    canTrainModel: state.canTrainModel,
    isModelTrained: state.isModelTrained,
    isTrainingModel: state.isTrainingModel,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTrainModelHandler: () => dispatch({ type: "TRAIN_MODEL" }),
    onMockTrainingModel: () => dispatch({ type: "TRAINING_MODEL" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TrainModel);
