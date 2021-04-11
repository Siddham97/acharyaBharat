import React, { useState,useEffect } from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import { Box, Avatar, Chip } from "@material-ui/core";

import DoneIcon from "@material-ui/icons/Done";
import logo from "../../../../assets/images/AB.jpeg";
import CourseDesc from "../../../../store/fixtures/courseDesc.json";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { Check, Create } from "@material-ui/icons";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    borderRadius: 20,
  },
  content: {
    padding: 24,
  },
  background: {
    background: "linear-gradient(120deg, #2980b9, #8e44ad)",
  },
  chip: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function TabPanel({ children, tabNum, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={tabNum !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {tabNum === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

function setDetails(id) {

  const cDetail = CourseDesc.filter(el => el.identifier === id)
  return cDetail[0]
}

const CourseTabs = (props) => {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();

  const { courseId } = props;
  const [courseDetail,setCourseDetail] = useState("");
  const data = setDetails(courseId); 

  useEffect(() => {
    setCourseDetail(data);
  }, [courseId]);

  return (
<Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight={"92.2vh"}
    >
      <Box m={3}>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <BrandCardHeader
            image={logo}
          />
          {courseDetail ? (
             <CardContent className={cardStyles.content}>
             <TextInfoContent
               classes={styles}
               heading={courseDetail.title}
               body={courseDetail.content}
             />
             <Box mt={2}>
         <Typography>
            {courseDetail.subText}
         </Typography>
         <Grid container spacing={2}>
           <Grid item xs={12} md={6}>
             {/* <List>
             {courseDetail.services.map((info, index) => (
             <ListItem key={index}>
               <ListItemIcon>
                   <Check />
               </ListItemIcon>
               <ListItemText primary={info} />
             </ListItem>
           ))}
             </List> */}
             {courseDetail.services}
           </Grid>
         </Grid>
       </Box>
           </CardContent>
          ) : (
            <Skeleton variant="rect" width={"100%"} height={150} />
          )}
         
        </Card>
      </Box>
    </Box>
  );
};

export default CourseTabs;
