import React, { Fragment, useRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Tooltip,
  Box,
  withStyles,
  isWidthUp,
  withWidth
} from "@material-ui/core";
import ExploreIcon from '@material-ui/icons/Explore';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from "@material-ui/icons/Menu";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import MessagePopperButton from "./MessagePopperButton";
import Balance from "./Balance";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import profilePicture from "../../dummy_data/images/profilePicture.jpg";
import SideDrawer from "./SideDrawer"

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_USER_QUERY = gql`
query usurio($id: ID){
  getUser(id : $id){
    username_user
  }
}
`;
function SimpleUser() {  
  const id = 1;

  const { loading, error, data,  networkStatus } = useQuery(
    GET_USER_QUERY,
    {
      variables: { id },
      notifyOnNetworkStatusChange: true
      // pollInterval: 500
    }
  );

  if (networkStatus === 4) return "Refetching!";
  if (loading) return null;
  if (error) return `Error!: ${error}`;

  return (    
            <div>
            {data.getUser.username_user}!
            </div>        
  );
}
const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: 0
    }
  },
  appBarToolbar: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  },
  accountAvatar: {
    backgroundColor: theme.palette.secondary.main,
    height: 24,
    width: 24,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5)
    }
  },
  drawerPaper: {
    height: "100%vh",
    whiteSpace: "nowrap",
    border: 0,
    width: theme.spacing(7),
    overflowX: "hidden",
    marginTop: theme.spacing(12),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    },
    backgroundColor: theme.palette.common.black
  },
  smBordered: {
    [theme.breakpoints.down("xs")]: {
      borderRadius: "50% !important"
    }
  },
  menuLink: {
    textDecoration: "none",
    color: theme.palette.text.primary
  },
  iconListItem: {
    width: "auto",
    borderRadius: theme.shape.borderRadius,
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  textPrimary: {
    color: theme.palette.primary.main
  },
  mobileItemSelected: {
    backgroundColor: `${theme.palette.primary.main} !important`
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400
  },
  username: {
    paddingLeft: 0,
    paddingRight: theme.spacing(2)
  },
  justifyCenter: {
    justifyContent: "center"
  },
  permanentDrawerListItem: {
    justifyContent: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
});

function NavBar(props) {
  const { selectedTab, messages, classes, width, openAddBalanceDialog } = props;
  // Will be use to make website more accessible by screen readers
  const links = useRef([]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const openMobileDrawer = useCallback(() => {
    setIsMobileOpen(true);
  }, [setIsMobileOpen]);

  const closeMobileDrawer = useCallback(() => {
    setIsMobileOpen(false);
  }, [setIsMobileOpen]);
  const openDrawer = useCallback(() => {
    setIsSideDrawerOpen(true);
  }, [setIsSideDrawerOpen]);

  const closeDrawer = useCallback(() => {
    setIsSideDrawerOpen(false);
  }, [setIsSideDrawerOpen]);
  const menuItems = [
    {
      link: "/user/profile",
      name: "Profile",
      onClick: closeMobileDrawer,
      icon: {
        desktop: (
          <AccountCircleIcon
            className={
              selectedTab === "Publication" ? classes.textPrimary : "text-white"
            }
            fontSize="small"
          />
        ),
        mobile: <AccountCircleIcon className="text-white" />
      }
    },
    {
      link: "/user/map",
      name: "Map",
      onClick: closeMobileDrawer,
      icon: {
        desktop: (
          <ExploreIcon
            className={
              selectedTab === "Publication" ? classes.textPrimary : "text-white"
            }
            fontSize="small"
          />
        ),
        mobile: <ExploreIcon className="text-white" />
      }
    },
    {
      link: "/user/publications",
      name: "Publications",
      onClick: closeMobileDrawer,
      icon: {
        desktop: (
          <EditLocationIcon
            className={
              selectedTab === "Publications" ? classes.textPrimary : "text-white"
            }
            fontSize="small"
          />
        ),
        mobile: <EditLocationIcon className="text-white" />
      }
    },

    {
      link: "/user/publication",
      name: "New publication",
      icon: {
        desktop: (
          <AddIcon className="text-white" fontSize="small" />
        ),
        mobile: <AddIcon className="text-white" />
      }
    },

    {
      link: "/",
      name: "Logout",
      icon: {
        desktop: (
          <PowerSettingsNewIcon className="text-white" fontSize="small" />
        ),
        mobile: <PowerSettingsNewIcon className="text-white" />
      }
    }
  ];
  return (
    <Fragment>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.appBarToolbar}>
          <Box display="flex" alignItems="center">
            <Hidden smUp>
              <Box mr={1}>
                <IconButton
                  aria-label="Open Navigation"
                  onClick={openMobileDrawer}
                  color="primary"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Hidden>
            <Hidden xsDown>
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="primary"
              >
                Peri
              </Typography>
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="secondary"
              >
                me
              </Typography>
            </Hidden>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width="100%"
          >
            {isWidthUp("sm", width) && (
              <Box mr={3}>
                <Balance
                  balance={2573}
                  openAddBalanceDialog={openAddBalanceDialog}
                />
              </Box>
            )}
            <MessagePopperButton messages={messages} />
            <ListItem
              disableGutters
              className={classNames(classes.iconListItem)}
            >
              {isWidthUp("sm", width) && (
                <ListItemText                  
                    primary={
                      <Typography color="textPrimary">
                         <IconButton
                        onClick={openDrawer}
                        color="primary"
                        aria-label="Open Sidedrawer"
                      >
                        <SimpleUser/> 
                      </IconButton>
                      <SideDrawer open={isSideDrawerOpen} onClose={closeDrawer} />
                                                   
                      </Typography>
                    }
                />
              )}
            </ListItem>
          </Box>
        </Toolbar>
      </AppBar>
      <Hidden xsDown>
        <Drawer //  both drawers can be combined into one for performance
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          open={false}
        >
          <List>
            {menuItems.map((element, index) => (
              <Link
                to={element.link}
                className={classes.menuLink}
                onClick={element.onClick}
                key={index}
                ref={node => {
                  links.current[index] = node;
                }}
              >
                <Tooltip
                  title={element.name}
                  placement="right"
                  key={element.name}
                >
                  <ListItem
                    selected={selectedTab === element.name}
                    button
                    divider={index !== menuItems.length - 1}
                    className={classes.permanentDrawerListItem}
                    onClick={() => {
                      links.current[index].click();
                    }}
                    aria-label={
                      element.name === "Logout"
                        ? "Logout"
                        : `Go to ${element.name}`
                    }
                  >
                    <ListItemIcon className={classes.justifyCenter}>
                      {element.icon.desktop}
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
              </Link>
            ))}
          </List>
        </Drawer>
      </Hidden>
      <NavigationDrawer
        menuItems={menuItems.map(element => ({
          link: element.link,
          name: element.name,
          icon: element.icon.mobile,
          onClick: element.onClick
        }))}
        anchor="left"
        open={isMobileOpen}
        selectedItem={selectedTab}
        onClose={closeMobileDrawer}
      />
    </Fragment>
  );
}

NavBar.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired
};

export default withWidth()(withStyles(styles, { withTheme: true })(NavBar));
