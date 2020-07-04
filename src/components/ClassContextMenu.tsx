import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const options = ["Delete Class", "Remove All Samples"];

const ITEM_HEIGHT = 48;
type Props = {
  nameClass: string;
  handleContextAction: (metaData: { action: string; nameClass: string }) => any;
};
type AppState = {
  anchorEl: any;
  open: boolean;
};
class LongMenu extends React.Component<Props, AppState> {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  state: AppState = {
    anchorEl: null,
    open: false,
  };
  // open = Boolean(this.state.anchorEl);

  handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    // let openState = Boolean(this.state.anchorEl);
    this.setState({
      anchorEl: event.currentTarget,
      open: true,
    });
  };

  handleClose = (event) => {
    // setAnchorEl(null);
    this.setState({ anchorEl: null, open: false });
    let metaData = {
      action: event.currentTarget.innerText,
      nameClass: this.props.nameClass,
    };
    this.props.handleContextAction(metaData);
  };
  render() {
    return (
      <span className="float-right">
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={this.state.open}
          onClose={(e) => this.handleClose(e)}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={this.handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </span>
    );
  }
}
export default LongMenu;
