import * as React from "react";
import { connect } from "react-redux";
type Props = {
  isModelTrained: boolean;
};
class OutputBodyComponent extends React.Component<Props> {
  render() {
    const untrainedModel = (
      <p>You must train a model on the left before you can preview it here.</p>
    );
    const trainedModel = <h3>Output Screen will come</h3>;
    return (
      <div>{this.props.isModelTrained ? trainedModel : untrainedModel}</div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isModelTrained: state.isModelTrained,
  };
};
export default connect(mapStateToProps)(OutputBodyComponent);
