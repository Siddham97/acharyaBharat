import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Box, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { Avatar, Tooltip, Chip } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

import Switch from "@material-ui/core/Switch";
import { useN01SwitchStyles } from "@mui-treasury/styles/switch/n01";

import PersonAddIcon from "@material-ui/icons/PersonAdd";

import HoverRating from "../../Rating/Rating";
import CourseTabs from "./CourseTabs/CourseTabs";
import ShowcaseCard from "../CourseCard/ShowcaseCard";

import * as actions from "../../../store/actions";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  position: {
    marginTop: "5%",
    [theme.breakpoints.up("md")]: {
      position: "fixed",
      marginTop: "8%",
      marginLeft: "5%",
    },
  },
  chipBox: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  background: {
    background: "linear-gradient(120deg, #2980b9, #8e44ad)",
  },
}));

function CourseDetail(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.up("md"));
  const myInfo = JSON.parse(localStorage.getItem("user"));
  const { courseDetail, loading, match, userList } = props;
  const { onFetchCourseDetail, onFetchUserListInThisCourse } = props;

  const switchStyles = useN01SwitchStyles();
  const [onShow, setOnShow] = useState(false);

  let nguoiTao;
  if (courseDetail.nguoiTao) {
    nguoiTao = courseDetail.nguoiTao.hoTen;
  }

  useEffect(() => {
    onFetchCourseDetail(match.params.id);
  }, [match.params.id, onFetchCourseDetail]);

  useEffect(() => {
    onFetchUserListInThisCourse(match.params.id);
  }, [match.params.id, onFetchUserListInThisCourse]);

  let nameList = [];

  let isMe = false;
  if (nameList && myInfo && nameList.length > 0) {
    isMe = nameList.includes(myInfo.taiKhoan);
  }

  return (
    <Grid className={classes.background} container direction={matchMD ? "row" : "column-reverse"}>
      <Grid item xs={matchMD ? 8 : 12}>
        <CourseTabs courseId={match.params.id}/>
      </Grid>

      <Grid item xs={matchMD ? 4 : 12}>
        <Box mx={2} className={classes.position}>
          <ShowcaseCard
            isMe={isMe}
            loading={loading}
            imageLink={courseDetail.hinhAnh}
            courseId={match.params.id}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    courseDetail: state.courses.courseDetail,
    loading: state.courses.loading,
    userList: state.user.userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCourseDetail: (courseId) =>
      dispatch(actions.fetchCourseDetail(courseId)),
    onFetchUserListInThisCourse: (courseId) =>
      dispatch(actions.fetchUserListInThisCourse(courseId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CourseDetail));
