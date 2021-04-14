import React from "react";
import cx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import { Box, useMediaQuery, Grid } from "@material-ui/core";
import logo from "../../assets/images/AB.jpg";
import ShowcaseCard from "../../components/CourseList/CourseCard/ShowcaseCard";

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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    padding: "12px",
    margin: theme.spacing(3, 0, 2),
  },
  message:{
    height: "6em",
  },
  position: {
    marginTop: "5%",
    [theme.breakpoints.up("md")]: {
      position: "fixed",
      marginTop: "8%",
      marginLeft: "5%",
    },
  },
}));

const ContactUs = React.memo(function ProjectCard() {
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.up("md"));

  return (
<Grid className={cardStyles.background} container direction={matchMD ? "row" : "column-reverse"}>
<Grid item xs={matchMD ? 8 : 12}>
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
          <CardContent className={cardStyles.content}>
          <React.Fragment>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfaiGMwJRXZ_OxaM8IprNFdXITCsWCSl0onvt3ZRpIdep0H0Q/viewform?embedded=true" width="640" height="1049" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </React.Fragment>
          </CardContent>
        </Card>
      </Box>
    </Box>
</Grid>

<Grid item xs={matchMD ? 4 : 12}>
  <Box mx={2} className={cardStyles.position}>
    <ShowcaseCard/>
  </Box>
</Grid>
</Grid>
  );
});

export default ContactUs;