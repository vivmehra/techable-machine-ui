type ImageState = {
  className: string;
  imageData: any[];
  imageCount: number;
  webCamCaptureClicked: boolean;
  isRemoveImages: boolean;
};
type AppState = {
  classDetails: ImageState[];
};
const initialState: AppState = {
  classDetails: [
    {
      className: "Class 1",
      imageData: [],
      imageCount: 0,
      webCamCaptureClicked: false,
      isRemoveImages: false,
    },
  ],
};
const reducer = (state = initialState, action) => {
  console.log("action type", action.type);
  if (action.type === "ADD_CLASS") {
    let classesData = [...state.classDetails];
    let className = "Class " + (classesData.length + 1);
    // let classCount = this.state.classDetails.length;
    //   classCount++;
    //   let classes = [...this.state.classDetails];
    classesData.push({
      className: className,
      imageData: [],
      imageCount: 0,
      webCamCaptureClicked: false,
      isRemoveImages: false,
    });
    console.log({ ...state, ...classesData });
    return {
      ...state,
      classDetails: [...classesData],
    };
  }
  if (action.type === "DELETE_CLASS") {
    let classes = [...state.classDetails];
    console.log("classes before filter", classes);
    classes.map((cl, key) => {
      if (cl.className === action.val) {
        classes.splice(key, 1);
      }
      return classes;
    });
    return {
      ...state,
      classDetails: [...classes],
    };
  }
  if (action.type === "WEB_CAM_CLICKED") {
    console.log(action.type);
    let classes = [...state.classDetails];
    classes.map((cl, key) => {
      if (cl.className === action.val) {
        classes[key].webCamCaptureClicked = !cl.webCamCaptureClicked;
      }
      return classes;
    });
    return {
      ...state,
      classDetails: [...classes],
    };
  }
  if (action.type === "CAPTURE_IMAGES") {
    console.log("action.val", action.val);
    let classes = [...state.classDetails];
    classes.map((cl, key) => {
      if (cl.className === action.val.className) {
        classes[key].imageData = [...action.val.imageData];
        classes[key].imageCount = action.val.imageCount;
      }
      return classes;
    });
    return {
      ...state,
      classDetails: [...classes],
    };
  }
  if (action.type === "REMOVE_SAMPLES") {
    console.log("REMOVE_SAMPLES", action.val);
    let classes = [...state.classDetails];
    classes.map((cl, key) => {
      if (cl.className === action.val) {
        classes[key].imageData.length = 0;
        classes[key].imageCount = 0;
      }
      return classes;
    });
    console.log("REMOVE_SAMPLES_classes", classes);
    return {
      ...state,
      classDetails: [...classes],
    };
  }
  return state;
};
export default reducer;
