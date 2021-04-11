import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import * as actions from "../../../store/actions";

import Skeleton from "@material-ui/lab/Skeleton";

import { Card, CardMedia } from "@material-ui/core";
import { Button, Box, Avatar, Typography } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import FindInPageIcon from "@material-ui/icons/FindInPage";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import BuildIcon from "@material-ui/icons/Build";

import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
import { useSlopeCardMediaStyles } from "@mui-treasury/styles/cardMedia/slope";
import Divider from '@material-ui/core/Divider';
import contactInfoImage from "../../../assets/images/contactInfo.jpg";
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 310,
    minWidth: 270,
    margin: "auto",
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    border: "2px solid #fff",
    margin: "-48px 32px 0 auto",
    "& > img": {
      margin: 0,
    },
  },
  button: {
    display: "block",
    width: "100%",
    height: "3rem",
    border: "none",
    background: "linear-gradient(120deg, #2980b9, #8e44ad, #2980b9)",
    backgroundSize: "200%",
    color: "#fff",
    outline: "none",
    transition: "0.5s",
    cursor: "pointer",

    "&:hover": {
      backgroundPosition: "right",
    },
  },
}));

const ShowcaseCard = (props) => {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();

  const { isMe, error, success } = props;
  const { courseId, onEnroll, onUserClearMessage } = props;

  const user = JSON.parse(localStorage.getItem("user"));
  const imageLink = contactInfoImage;

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (success) {
      enqueueSnackbar(success, { variant: "success" });
      onUserClearMessage();
    }
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      onUserClearMessage();
    }
  }, [error, success, enqueueSnackbar, onUserClearMessage]);

  const infoList = [
    {
      icon: <LocationOnIcon fontSize="small" />,
      text: "4578 Marmora Road, Glasgow D04 89GR",
    },
    {
      icon: <MailIcon fontSize="small" />,
      text: "info@demolink.org",
    },
    {
      icon: <PhoneIphoneIcon fontSize="small" />,
      text: "+91 9312601398",
    },
    {
      icon: <PhoneIphoneIcon fontSize="small" />,
      text: "+91 8562601398",
    },
  ];

  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      {imageLink ? (
        <CardMedia classes={mediaStyles} image={imageLink} />
      ) : (
        <Skeleton variant="rect" width={"100%"} height={150} />
      )}
      <Box mt={2}>
        <Typography align="center" variant="h5" gutterBottom>
          Contact Info
        </Typography>
      </Box>
      <Divider light />
      <Box mt={2}>
        <Box ml={2}>
          <Typography variant="subtitle1">Get In Touch</Typography>
        </Box>
        <List disablePadding dense>
          {infoList.map((info, index) => (
            <ListItem key={index}>
              <ListItemIcon style={{ minWidth: 32 }}>{info.icon}</ListItemIcon>
              <ListItemText secondary={info.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.user.error,
    success: state.user.success,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEnroll: (courseId, isMe) =>
      dispatch(actions.EnrollCourse(courseId, isMe)),
    onUserClearMessage: () => dispatch(actions.userClearMessage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowcaseCard);
