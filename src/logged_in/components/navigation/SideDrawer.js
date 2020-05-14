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
const drawerWidth = 120;

const styles = {
  toolbar: {
    minWidth: drawerWidth,
    background: 'linear-gradient(left, rgba(254,254,254,0.75) 0%, rgba(239,239,239,1) 16%, rgba(209,209,209,1) 49%, rgba(219,219,219,1) 50%, rgba(226,226,226,1) 100%',
  },
  user:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    width: "90%",
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
          width="90%"
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
