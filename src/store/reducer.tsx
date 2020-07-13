type ImageState = {
  className: string;
  imageData: any[];
  imageCount: number;
  webCamCaptureClicked: boolean;
  isRemoveImages: boolean;
};
type AppState = {
  classDetails: ImageState[];
  canTrainModel: boolean;
  isModelTrained: boolean;
  isTrainingModel: boolean;
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
    {
      className: "Class 2",
      imageData: [],
      imageCount: 0,
      webCamCaptureClicked: false,
      isRemoveImages: false,
    },
  ],
  canTrainModel: false,
  isModelTrained: false,
  isTrainingModel: false,
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

    let canTrainModel = false;
    if (classes.length >= 2) {
      classes.every((classObj) => {
        return classObj.imageData.length > 0
          ? (canTrainModel = true)
          : (canTrainModel = false);
      });
    }
    console.log("classes.length >= 2", canTrainModel);
    return {
      ...state,
      classDetails: [...classes],
      canTrainModel: canTrainModel,
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
      canTrainModel: false,
    };
  }
  if (action.type === "TRAIN_MODEL") {
    console.log("TRAIN_MODEL");

    return {
      ...state,
      isModelTrained: true,
      isTrainingModel: false,
      canTrainModel: false,
    };
  }
  if (action.type === "TRAINING_MODEL") {
    console.log("TRAINING_MODEL");

    return {
      ...state,
      isTrainingModel: true,
      canTrainModel: false,
    };
  }

  return state;
};
export default reducer;
