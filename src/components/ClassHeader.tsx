import React from "react";
import ClassContextMenu from "./ClassContextMenu";
type Props = {
  nameClass: string;
  handleContextAction: (metaData: { action: string; nameClass: string }) => any;
};
class ClassHeader extends React.Component<Props> {
  state = {
    contextMenuShown: false,
  };
  contextMenuClickHandler = () => {
    this.setState({ contextMenuShown: !this.state.contextMenuShown });
  };
  render() {
    return (
      <div>
        <span className="m-2">{this.props.nameClass} </span>
        {/* <span onClick={() => this.contextMenuClickHandler()}>3dots</span> */}

        <ClassContextMenu
          nameClass={this.props.nameClass}
          handleContextAction={(metaData) =>
            this.props.handleContextAction(metaData)
          }
        />

        {this.state.contextMenuShown ? (
          <div onClick={() => this.contextMenuClickHandler()}>
            <ClassContextMenu
              nameClass={this.props.nameClass}
              handleContextAction={(metaData) =>
                this.props.handleContextAction(metaData)
              }
            />
          </div>
        ) : null}
        <hr />
      </div>
    );
  }
}
export default ClassHeader;
