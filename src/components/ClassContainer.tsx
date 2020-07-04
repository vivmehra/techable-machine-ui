import React from "react";
import ClassComponent from "./ClassComponent";
// import Button from "@material-ui/core/Button";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import { connect } from "react-redux";
type ImageState = {
  className: string;
  imageData: any[];
  imageCount: number;
  webCamCaptureClicked: boolean;
  isRemoveImages: boolean;
};
// type AppState = {
//   classDetails: ImageState[];
// };
type Props = {
  classes: [];
  onAddClass: () => void;
  onDeleteClass: (class_name: string) => void;
  onRemoveSamples: (class_name: string) => void;
};

class ClassContainer extends React.Component<Props> {
  // state = {
  //   classDetails: [
  //     {
  //       className: "Class 1",
  //       imageData: [],
  //       imageCount: 0,
  //       webCamCaptureClicked: false,
  //       isRemoveImages: false,
  //     },
  //   ],
  // };
  // addClass = () => {
  //   let classCount = this.state.classDetails.length;
  //   classCount++;
  //   let classes = [...this.state.classDetails];
  //   classes.push({
  //     className: "Class " + classCount,
  //     imageData: [],
  //     imageCount: 0,
  //     webCamCaptureClicked: false,
  //     isRemoveImages: false,
  //   });
  //   this.setState({
  //     classDetails: classes,
  //   });
  // };
  // deleteClass = (class_name) => {
  //   console.log("class_name", class_name);
  //   let classes = [...this.state.classDetails];
  //   console.log("classes before filter", classes);
  //   classes.map((cl, key) => {
  //     if (cl.className === class_name) {
  //       classes.splice(key, 1);
  //     }
  //     return classes;
  //   });
  //   this.setState({ classDetails: classes });
  // };
  // removeSamples = (class_name) => {
  //   console.log("class_name", class_name);
  //   let classes = [...this.state.classDetails];
  //   console.log("classes before filter", classes);
  //   classes.map((cl, key) => {
  //     if (cl.className === class_name) {
  //       classes[key].isRemoveImages = true;
  //     }
  //     return classes;
  //   });
  //   this.setState({ classDetails: classes });
  // };
  handleContextAction = (metaData) => {
    console.log("actionnnnnn", metaData);
    switch (metaData.action) {
      case "Delete Class":
        this.props.onDeleteClass(metaData.nameClass);
        break;
      case "Remove All Samples":
        this.props.onRemoveSamples(metaData.nameClass);
        break;
    }
  };
  render() {
    // console.log("this.props.classes", this.props.classes);
    return (
      <>
        {this.props.classes.length > 0 &&
          this.props.classes.map((cl: ImageState) => {
            return (
              <ClassComponent
                nameClass={cl.className}
                handleContextAction={(metaData) =>
                  this.handleContextAction(metaData)
                }
                isRemoveImages={cl.isRemoveImages}
              />
            );
          })}

        {/* <ClassComponent /> */}
        <div
          className="rounded m-4"
          style={{
            backgroundColor: "#eee",
            borderRadius: "200px",
            width: "33%",
            height: "20%",
            textAlign: "center",
          }}
        >
          <AddCircleTwoToneIcon
            onClick={this.props.onAddClass}
            color="primary"
            fontSize="large"
          />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    classes: state.classDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClass: () => dispatch({ type: "ADD_CLASS" }),
    onDeleteClass: (class_name) =>
      dispatch({ type: "DELETE_CLASS", val: class_name }),
    onRemoveSamples: (class_name) =>
      dispatch({ type: "REMOVE_SAMPLES", val: class_name }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ClassContainer);
