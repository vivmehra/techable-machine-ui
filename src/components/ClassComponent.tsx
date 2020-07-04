import * as React from "react";
import ClassHeader from "./ClassHeader";
import ClassBody from "./ClassBody";

type Props = {
  nameClass: string;
  handleContextAction: (metaData: { action: string; nameClass: string }) => any;
  isRemoveImages: boolean;
};
class ClassComponent extends React.Component<Props> {
  render() {
    return (
      <div
        className="rounded m-4"
        style={{ backgroundColor: "#eee", borderRadius: "200px", width: "33%" }}
      >
        <ClassHeader
          nameClass={this.props.nameClass}
          handleContextAction={(metaData) =>
            this.props.handleContextAction(metaData)
          }
        />
        <ClassBody
          isRemoveImages={this.props.isRemoveImages}
          nameClass={this.props.nameClass}
        />
      </div>
    );
  }
}
export default ClassComponent;
