import * as React from "react";
import Webcam from "react-webcam";
import Button from "@material-ui/core/Button";
import VideocamIcon from "@material-ui/icons/Videocam";
import ClearIcon from "@material-ui/icons/Clear";
import { connect } from "react-redux";

// type AppState = {
//   imageData: any[];
//   imageCount: number;
//   webCamCaptureClicked: boolean;
// };
type Props = {
  isRemoveImages: boolean;
  nameClass: string;
  onWebCamCaptureClickHandler: (nameClass: string) => any;
  onCaptrureImagesHandler: (imageData: Object) => any;
  classes: any;
};
class ClassBody extends React.Component<Props> {
  // state: AppState = {
  //   imageData: [],
  //   imageCount: 0,
  //   webCamCaptureClicked: false,
  // };
  constructor(props) {
    super(props);
    this.capture = this.capture.bind(this);
    this.handleButtonRelease = this.handleButtonRelease.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isRemoveImages) {
      let imageData = [...this.getCurrentClass().imageData];
      imageData.length = 0;
      // this.setState({ imageData: imageData, imageCount: 0 });
      this.props.onCaptrureImagesHandler({
        imageData: imageData,
        imageCount: 0,
        className: this.getCurrentClass().className,
      });
    }
  }
  getCurrentClass = () => {
    const currentClass = this.props.classes.filter(
      (cl) => cl.className === this.props.nameClass
    );
    return currentClass[0];
  };
  // caprureFromWebCamClickHandler = () => {
  //   this.setState({ webCamCaptureClicked: !this.state.webCamCaptureClicked });
  // };
  handleButtonRelease() {
    console.log("this.buttonPressTimer " + this.buttonPressTimer);
    clearTimeout(this.buttonPressTimer);
  }
  buttonPressTimer: any;
  webcamRef: any = React.createRef();

  capture() {
    this.buttonPressTimer = setInterval(() => {
      let currentCount = this.getCurrentClass().imageCount;
      const imageSrc = this.webcamRef.current.getScreenshot();
      const imageDataArr = [...this.getCurrentClass().imageData];
      imageDataArr.push(imageSrc);
      //this.setState({ imageData: imageDataArr, imageCount: ++currentCount });
      this.props.onCaptrureImagesHandler({
        imageData: imageDataArr,
        imageCount: ++currentCount,
        className: this.getCurrentClass().className,
      });
    }, 300);
  }
  render() {
    const videoConstraints = {
      width: 760,
      height: 760,
      facingMode: "user",
    };
    console.log("Number of Click" + this.getCurrentClass().imageCount);

    return (
      <div>
        {this.getCurrentClass().webCamCaptureClicked ? (
          <div id="allContainer">
            {/* <p onClick={() => this.caprureFromWebCamClickHandler()}>Cancel</p> */}
            {/* <span>Webcam</span> */}
            <div
              id="camContainer"
              style={{ width: "50%", display: "inline-block" }}
            >
              <span className="float-right">
                <ClearIcon
                  onClick={() =>
                    this.props.onWebCamCaptureClickHandler(this.props.nameClass)
                  }
                  color="primary"
                  fontSize="large"
                />
              </span>
              <Webcam
                audio={false}
                height={120}
                ref={this.webcamRef}
                screenshotFormat="image/jpeg"
                width={120}
                videoConstraints={videoConstraints}
              />
              {/* <button onClick={() => this.capture()}>Capture photo</button> */}
              <div
                onMouseDown={this.capture}
                onMouseUp={this.handleButtonRelease}
              >
                <Button variant="contained" color="primary" size="small">
                  Capture photo
                </Button>
              </div>
            </div>

            {console.dir(this.state)}
            {this.getCurrentClass().imageData.length > 0 ? (
              <div
                className="overflow-auto"
                style={{
                  maxHeight: "150px",
                  display: "inline-block",
                  width: "50%",
                }}
                id="imageContainer"
              >
                <p>{this.getCurrentClass().imageCount} Images</p>
                {this.getCurrentClass().imageData.map((img) => {
                  return (
                    <img
                      className="border rounded w-25 p-1 h-25"
                      src={img}
                      alt=""
                    />
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : (
          <div>
            {/* <span onClick={() => this.caprureFromWebCamClickHandler()}>
              Capture from Web Cam
            </span> */}
            <VideocamIcon
              color="primary"
              fontSize="large"
              onClick={() =>
                this.props.onWebCamCaptureClickHandler(this.props.nameClass)
              }
            />
          </div>
        )}
      </div>
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
    onWebCamCaptureClickHandler: (nameClass) =>
      dispatch({ type: "WEB_CAM_CLICKED", val: nameClass }),
    onCaptrureImagesHandler: (imageData) =>
      dispatch({ type: "CAPTURE_IMAGES", val: imageData }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ClassBody);
