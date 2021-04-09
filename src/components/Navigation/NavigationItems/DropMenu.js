import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Menu, Box, useMediaQuery } from "@material-ui/core";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";

import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoreIcon from "@material-ui/icons/MoreVert";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArchiveIcon from "@material-ui/icons/Archive";

import AvatarItem from "../Avatar/AvatarItem";
import DarkThemeSwitch from "../../SwitchButton/DarkThemeSwitch";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none",
  },
  marginLeft: {
    marginLeft: theme.spacing(1),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const DropMenu = (props) => {
  const classes = useStyles();
  const { isAuthenticated, darkTheme } = props;
  const matchMD = useMediaQuery("(min-width:960px)");
  const localTheme = JSON.parse(localStorage.getItem("darkTheme"));

  let isTheme = darkTheme;
  if (!darkTheme) {
    isTheme = localTheme;
  }

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuRender = (
    <Box
      display="flex"
      flexDirection={matchMD ? "row" : "column"}
      alignItems="center"
      m={matchMD ? 0 : 1}
      minWidth={matchMD ? 0 : 180}
    >
      <ButtonGroup disableElevation variant="contained" size="small">
        <Box display="flex" justifyContent="center">
        <IconButton
          size="small"
          component={Link}
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener"
        >
          <FacebookIcon style={{color:"white"}}/>
        </IconButton>
        
        <IconButton
          size="small"
          component={Link}
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener"
        >
          <TwitterIcon style={{color:"white"}}/>
        </IconButton>

        <IconButton
          size="small"
          component={Link}
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon style={{color:"white"}}/>
        </IconButton>

        <IconButton
          size="small"
          component={Link}
          href="https://github.com/"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon style={{ fontSize: "1.125rem", color:"white"}} />
        </IconButton>
      </Box>
      </ButtonGroup>
    </Box>
  );

  return (
    <Fragment>
      <div className={classes.sectionDesktop}>{menuRender}</div>

      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls="menu-mobile"
          aria-haspopup="true"
          onClick={(e) => setMobileMoreAnchorEl(e.currentTarget)}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>

      {/* Collapse menu */}
      <Menu
        anchorEl={mobileMoreAnchorEl}
        id="menu-mobile"
        keepMounted
        open={isMobileMenuOpen}
        onClose={() => setMobileMoreAnchorEl(false)}
      >
        {menuRender}
      </Menu>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    darkTheme: state.ui.darkTheme,
  };
};

export default connect(mapStateToProps)(DropMenu);
