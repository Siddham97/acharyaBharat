import React, { Fragment, useState } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { useMediaQuery, Avatar } from "@material-ui/core";
import { GridList, GridListTile } from "@material-ui/core";
import { Grid, Button, Box, Typography, Paper } from "@material-ui/core";

import TapAndPlayIcon from '@material-ui/icons/TapAndPlay';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import GroupIcon from '@material-ui/icons/Group';
import Carousel from "react-material-ui-carousel";
import Image from "material-ui-image";
import CountUp from "react-countup";

import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

import CourseList from "../../components/CourseList/CourseList";

import heroImage from "../../assets/images/home-hero.jpg";

import course1 from "../../assets/images/episodes/1.png";
import course2 from "../../assets/images/episodes/2.png";
import course3 from "../../assets/images/episodes/3.png";
import course4 from "../../assets/images/episodes/4.png";
import course5 from "../../assets/images/episodes/5.png";
import course6 from "../../assets/images/episodes/6.png";

import tileimage1 from "../../assets/images/blog/img-1.jpg";
import tileimage2 from "../../assets/images/blog/img-2.jpg";
import tileimage3 from "../../assets/images/blog/img-3.jpg";
import tileimage4 from "../../assets/images/blog/img-4.jpg";
import tileimage5 from "../../assets/images/blog/img-5.jpg";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { FooterContainer } from "../footer/footer";
import Player from "../../components/player";
import Card from "../../components/card";
import tutor from "../../assets/images/tutor.jpg";
import video from "../../assets/videos/video.mp4";

const useStyles = makeStyles((theme) => ({
  heroText: {
    position: "absolute",
    margin: "0 10% 0 10%",
    color: "white",
  },
  header: {
    height: "60vh",
    backgroundSize: "cover",
    backgroundPosition: "65% 50%",
    backgroundAttachment: "fixed",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
  },
  avatar: {
    backgroundColor: "#e67e22",
  },
  feature: {
    color: "white",
    minHeight: "30vh",
    position: "relative",
    background: `linear-gradient(120deg, #2980b9, #8e44ad)`,
  },
  intro: {
    position: "relative",
    background: `linear-gradient(120deg, #2980b9, #8e44ad)`,
    animation: `5s ease 0s infinite normal none running Gradient`,
    color: "white",
  },
  topSwoop: {
    position: "absolute",
    top: "-2px",
  },
  bottomSwoop: {
    position: "absolute",
    bottom: "-2px",
    zIndex: 0,
  },
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "wrap",
    transform: "translateZ(0)",
  },
  titleNumber: {
    lineHeight: "85%",
    "@media (max-width: 1274px)": {
      lineHeight: "100%",
    },
    "@media (max-width: 600px)": {
      fontSize: "4rem",
    },
  },
  contactus:{
    textDecoration: "none",
  }
}));

const slideItems = [
  {
    media: course1,
    title: "Bharat Dwivedi",
    subtitle: "Watch the awesome demo video from our team members!",
  },
  {
    media: course2,
    title: "Siddham Sharma",
    subtitle: "Well just mix two colors and your are good to go!",
  },
  {
    media: course3,
    title: "May the force be with you",
    subtitle:
      "The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.",
  },
  {
    media: course4,
    title: "May the force be with you",
    subtitle:
      "The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.",
  },
  {
    media: course5,
    title: "May the force be with you",
    subtitle:
      "The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.",
  },
  {
    media: course6,
    title: "May the force be with you",
    subtitle:
      "The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.",
  },
];

const tileData = [
  {
    img: tileimage1,
    cols: 1,
  },
  {
    img: tileimage2,
    cols: 1,
  },
  {
    img: tileimage3,
    cols: 1,
  },
  {
    img: tileimage4,
    cols: 1,
  },
  {
    img: tileimage5,
    cols: 2,
  },
];

const featureList = [
  {
    icon: <LaptopMacIcon />,
    title: "Fast & Convenient Source",
    subtitle: "We make sure to deliver valuable results and outcomes.",
    count: null,
  },
  {
    icon: <GroupIcon />,
    title: "Modern Tools",
    subtitle: "To deliver accurate and convenient results.",
    count: null,
  },
  {
    icon: <TapAndPlayIcon />,
    title: "Online Tutoring",
    subtitle: "An easy and convenient mode of learning.",
    count: null,
  },
];

function Dashboard({ darkTheme }) {
  const classes = useStyles();
  const matchSM = useMediaQuery("(min-width:600px)");
  const matchMD = useMediaQuery("(min-width:1000px)");
  const matchLG = useMediaQuery("(min-width:1400px)");
  const user = JSON.parse(localStorage.getItem("user"));
  const localTheme = JSON.parse(localStorage.getItem("darkTheme"));
  const [handleOpen, setHandleOpen] = useState({ open: false });

  let isTheme = darkTheme;
  if (!darkTheme) {
    isTheme = localTheme;
  }

  const handleClick = () => {
    setHandleOpen({ open: true });
  };

  const topSwoop = (
    <svg
      viewBox="0 0 1430 140"
      className={classes.topSwoop}
      fill={isTheme ? "#303030" : "#fafafa"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1440 0v59.969c-65.287-39.594-188.865-55.343-370.736-47.248C766 26.221 627.87 140 277 140 171.698 140 79.365 124.417 0 93.25V0h1440z"></path>
    </svg>
  );

  const bottomSwoop = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1430 140"
      fill={isTheme ? "#303030" : "#fafafa"}
      className={classes.bottomSwoop}
    >
      <path d="M0 140h1440V46.75C1360.635 15.583 1268.302 0 1163 0 812.13 0 674 113.78 370.736 127.279 188.866 135.374 65.286 119.625 0 80.03V140z"></path>
    </svg>
  );

  return (
    <>
    <Fragment>
      <Grid container alignItems="center" className={classes.header}>
        <Grid item className={classes.heroText}>
          <Typography variant="h4" gutterBottom>
            AcharyaBharat
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Would You Like To Start A Project With Us?
          </Typography>
          <Link to="/contact-us" className={classes.contactus}>
          <Button variant="contained" color="primary">
            Contact Us
          </Button>
          </Link>
        </Grid>
      </Grid>

      <Box pb={7} className={classes.feature}>
        <Grid container justify="space-between" alignItems="center">
          {featureList.map((item) => (
            <Box m={2} display="flex" alignItems="center" key={item.title}>
              <Avatar className={classes.avatar}>{item.icon}</Avatar>
              <Box ml={1} display="flex" flexDirection="column">
                <Box display="flex" alignItems="center">
                  {item.count ? item.count : null}
                  <Typography variant="subtitle1">{item.title}</Typography>
                </Box>
                <Typography variant="caption">{item.subtitle}</Typography>
              </Box>
            </Box>
          ))}
        </Grid>
        <Box>{bottomSwoop}</Box>
      </Box>

      <Box my={5} style={{ minHeight: 520 }}>
        <Box mx={6} py={3}>
          <Typography variant="h5" gutterBottom>
            <strong>The world's most useless selection of courses</strong>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Choose from 1000 online video courses with new additions published
            every decade
          </Typography>
        </Box>
        <CourseList />
      </Box>

      <Box className={classes.intro}>
        {topSwoop}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          minHeight="90vh"
        >
          <Box mx={5} minWidth={315} alignSelf="center">
            <Box>
              <Typography variant="h4" color="inherit">
                Why Choose us?
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography>
              Most agencies will tell you what you want to hear, but 
              we are a little distinct. We don’t profess to be the biggest 
              agency, or to have global networks. However, we are proud of 
              the business relationships we have flourished. This is witnessed
               by a major percentage of our work being exclusive, meaning 
               our clients acknowledge the excellent quality of work and 
               the exceptional quality of candidates placed with them.
              </Typography>
            </Box>

            <Box mt={3}>
              <Typography>
              Our main focus is to act like a bridge between our client and the 
              aspiring candidate. We don’t charge any cut or commission for 
              recruitment process either from client side or candidate end. 
              Our main concern is to provide a platform so that candidates 
              can channelize their skills and knowledge to achieve their 
              goals and thus helping the clients in leveraging them as 
              valuable resources.
              </Typography>
            </Box>
          </Box>
        </Box>
        {bottomSwoop}
      </Box>

      <Box my={5} display="flex" alignContent="center" justifyContent="center">
        <Box width="100vh">
          <Carousel
            animation={"slide"}
            timeout={500}
            indicators={false}
            className={classes.carousel}
          >
            {slideItems.map((item) => (
              <Paper key={item.title}>
                <Image src={item.media} aspectRatio={16 / 9} />
              </Paper>
            ))}
          </Carousel>
        </Box>
      </Box>

      <Box className={classes.intro}>
        {topSwoop}
        <Box
          display="flex"
          flexDirection="column"
          flexWrap="nowrap"
          pt={matchLG ? 20 : matchMD ? 15 : 10}
          pb={5}
        >
          <Box alignSelf="flex-start" maxWidth={500} m={5}>
            <Box display="flex">
              <Typography variant="h1" className={classes.titleNumber}>
                1
              </Typography>
              <Box ml={1} display="flex" flexDirection="column">
                <Typography variant="h4">
                  Easy to search the topic you want to learn or teaching
                </Typography>
                <Typography style={{ marginTop: 16 }}>
                  Course Hub is collect on many resourses. People who study at
                  the Course Hub can archive knowledge by join suitable topic.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box alignSelf="flex-end" maxWidth={500} m={5}>
            <Box display="flex">
              <Typography variant="h1" className={classes.titleNumber}>
                2
              </Typography>
              <Box ml={1} display="flex" flexDirection="column">
                <Typography variant="h4">
                  Join us to help share knowledge for the community
                </Typography>
                <Typography style={{ marginTop: 16 }}>
                  We have an enthusiastic and responsible team of teachers from
                  many companies and corporations with many years of experience.
                  Join us to grow together.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box alignSelf="flex-start" maxWidth={500} m={5}>
            <Box display="flex">
              <Typography variant="h1" className={classes.titleNumber}>
                3
              </Typography>
              <Box ml={1} display="flex" flexDirection="column">
                <Typography variant="h4">
                  Course Hub users easy to achieve the desired skills
                </Typography>
                <Typography style={{ marginTop: 16 }}>
                  Course Hub system is meticulously built to enhance the
                  interaction between students and teachers. It provides an
                  authentic and easy experience to gain knowledge as well as
                  help teachers easily access students
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {bottomSwoop}
      </Box>

      <Box my={5} display="flex" alignContent="center" justifyContent="center">
        {/* <Box width="100vh">
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </Box> */}
        <Card.Group>
          <Card>
            <Card.Title>Card</Card.Title>
            <Card.Entities>
              {slideItems.map((item) => (
                <Card.Item key={item.media} item={item}>
                  <Card.Image src={item.media} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.subtitle}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature src={tutor}>
              <Player>
                <Player.Button />
                <Player.Video src={video} />
              </Player>
            </Card.Feature>
          </Card>
      </Card.Group>
      </Box>

      <Box className={classes.intro}>
        {topSwoop}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          minHeight="50vh"
        >
          <Box mx={5} mt={5} minWidth={315} alignSelf="center">
            <Box>
              <Typography variant="h4" color="inherit">
                  India Office
              </Typography>
            </Box>
            <Box mt={3} display="flex">
            <LocationOnIcon style={{color:"white"}}/>
              <Typography>
                308,third floor, Shree Amar Heights,Ajmer Rd, 
                opposite Asopa Hospital, Nirman Nagar, DCM, Jaipur, 
                Rajasthan 302019
              </Typography>
            </Box>
          </Box>
          <Box mx={5} mt={5} minWidth={315} alignSelf="center">
            <Box>
              <Typography variant="h4" color="inherit">
                  USA Office
              </Typography>
            </Box>
            <Box mt={3} display="flex">
            <LocationOnIcon style={{color:"white"}}/>
              <Typography>
                  16193, Coastal Highway Lewes, Delaware, 19958, USA
              </Typography>
            </Box>
          </Box>
          <Box mx={5} mt={5} minWidth={315} alignSelf="center">
            <Box>
              <Typography variant="h4" color="inherit">
              Australia Office
              </Typography>
            </Box>
            <Box mt={3} display="flex">
            <LocationOnIcon style={{color:"white"}}/>
              <Typography>
              Australia-Level 2, 230-240 Commonwealth Street, Surry Hills, NSW 2010
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <FooterContainer />
    </Fragment>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    darkTheme: state.ui.darkTheme,
  };
};

export default connect(mapStateToProps)(Dashboard);
