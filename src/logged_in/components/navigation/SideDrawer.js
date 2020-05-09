import React from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  IconButton,
  Toolbar,
  Divider,
  Typography,
  Box,
  withStyles
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import User from "../user/SimpleUser"
const drawerWidth = 240;

const styles = {
  toolbar: {
    minWidth: drawerWidth,
    background: "rgba(201, 76, 76,0.2)"
  },
  user:{
    background: "rgba(201, 76, 76,0.2)",
  }
};

function SideDrawer(props) {
  const { classes, onClose, open } = props;
  return (
    <Drawer anchor="right" open={open} variant="temporary" onClose={onClose}>
      <Toolbar disableGutters className={classes.toolbar}>
        <Box
          pl={3}
          pr={3}
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <Typography variant="h6">Mi cuenta</Typography>
          <IconButton
            onClick={onClose}
            color="primary"
            aria-label="Close Sidedrawer"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Divider />
      <User  className={classes.user}/>
    </Drawer>
  );
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(SideDrawer);
