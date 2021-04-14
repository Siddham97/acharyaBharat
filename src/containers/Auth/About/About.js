import React from "react";
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
import logo from "../../../assets/images/AB.jpg";

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

const About = React.memo(function ProjectCard() {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight={"92.2vh"}
      className={cardStyles.background}
    >
      <Box m={3}>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <BrandCardHeader
            image={logo}
          />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={styles}
              overline={"AcharyaBharat"}
              heading={"About "}
              body={
                `AcharyaBharat is an initiative to bring educational system to a whole new level of teaching and being taught. Merging the educational and industrial sector with a broader vision and mission, we are an online educational platform catering to help the institutions and schools to grow and work towards expansion. Having a team of dedicated employees, we serve our educational entities for a better code of conduct and encourage our students to do what they are best at rather than giving up on their goals and passion for a job sake. We are here to plan, prepare and progress for all your educational needs tailored as per your demands and requirements.
                We as a team, believe to deliver valuable solutions to the students to hit A+ results. Availing our writing services, not only ease out the phase but also ensures to focus on the extra-curricular activities for the students. Skip the late struggle to complete the given tasks within the dated timeline by getting in touch with our writers and experts to serve you with the best writing solutions.`
              }
            />
            <div>
            <TextInfoContent
              classes={styles}
              heading={"Our Mission"}
              body={
                `To create a change, or at least be the first to make a change in terms of educational organizations in the country of India. It is targeted in order to secure a definitive future where education and competency would be seen by the youth as an attractive prospect, not something that society has burdened them with. Ultimately, we hope at becoming a trailblazer for the general populace that education is truly priceless something that one should value personally, not about parading about with no fire and passion within oneself.`
              }
            />
            <TextInfoContent
              classes={styles}
              heading={"Our Vission"}
              body={
                `We would like to see a country where value is given exactly where it should be. We completely understand the level of competitiveness, and social pressures that students have to face in the society today. However, in future, we would like to see a country where things have truly changed for the better. Where there is freedom of choice for an individual, and opportunities available to pursue them as such. This is the central vision of everything we have to offer, and see how effective we can be through hard work, perseverance and dedication.`
              }
            />
            </div>
            {/* <Box mt={3}>
              <TextInfoContent
                classes={styles}
                heading={
                  "For my particular thanks to the authors of the following libraries:"
                }
              />
              <Box className={cardStyles.chip}>
                {librariesList.map((library, index) => (
                  <Chip
                    key={index}
                    avatar={<Avatar>{library.avatar}</Avatar>}
                    label={library.name}
                    clickable
                    color="default"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                    variant="outlined"
                  />
                ))}
              </Box>
            </Box> */}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
});

export default About;

const librariesList = [
  {
    avatar: "R",
    name: "ReactJS",
    link: "https://reactjs.org/",
  },
  {
    avatar: "C",
    name: "Create React App",
    link: "https://github.com/facebook/create-react-app",
  },
  {
    avatar: "M",
    name: "MATERIAL-UI",
    link: "https://material-ui.com/",
  },
  {
    avatar: "T",
    name: "Mui-Treasury",
    link: "https://mui-treasury.com/",
  },
  {
    avatar: "N",
    name: "Notistack",
    link: "https://iamhosseindhv.com/notistack/demos",
  },
  {
    avatar: "D",
    name: "Material-UI-dropzone",
    link: "https://yuvaleros.github.io/material-ui-dropzone/",
  },
  {
    avatar: "F",
    name: "Formik",
    link: "https://jaredpalmer.com/formik",
  },
  {
    avatar: "F",
    name: "Formik Material-UI",
    link: "https://stackworx.github.io/formik-material-ui/",
  },
  {
    avatar: "W",
    name: "Wertarbyte Material-UI Components",
    link: "https://mui.wertarbyte.com/",
  },
  {
    avatar: "C",
    name: "React Material UI Carousel",
    link: "https://github.com/Learus/react-material-ui-carousel",
  },
  {
    avatar: "C",
    name: "React CountUp",
    link: "https://github.com/glennreyes/react-countup",
  },
  {
    avatar: "R",
    name: "Redux",
    link: "https://redux.js.org/",
  },
  {
    avatar: "R",
    name: "REACT ROUTER",
    link: "https://reacttraining.com/react-router/",
  },
];
