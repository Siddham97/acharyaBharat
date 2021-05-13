import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import cx from "clsx";
import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";

import { Favorite, Share, ExpandMore } from "@material-ui/icons";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 270,
  },
  title: {
    height: 70,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const CourseCard = ({ course }) => {
  const classes = useStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={cx(classes.root, shadowStyles.root)}>
      <CardActionArea component={Link} to={`/courses/${course.maKhoaHoc}`}>
        <CardMedia
          className={classes.media}
          image={course.hinhAnh}
          title={course.tenKhoaHoc}
        />
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="subtitle2"
            component="h5"
          >
            {course.tenKhoaHoc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CourseCard;
