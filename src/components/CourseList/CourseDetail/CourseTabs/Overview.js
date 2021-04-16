import React, { Fragment } from "react";

import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

import { Check, Create } from "@material-ui/icons";

export default function Overview() {
  return (
    <Fragment>
      <Box mt={1}>
        <Typography variant="h5" gutterBottom>
          Description
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
        AcharyaBharat offers top quality Educational Content Development services 
        for CBSE, State Boards as well as ICSE/ISC board course curriculum. We 
        also offer educational content for JEE Mains, JEE Advanced,and other 
        competitive entrance examinations held in India as well as other countries.
        All our content developers are industry veterans who possess years of 
        experience and expertise in teaching or training students in their specialised
         subjects. For we believe that great content can make learning simple and 
         hassle-free.
        So, if you are an e-learning service provider, connect with our team now. 
        We will offer the best educational content developed by top industry 
        professionals at affordable pricing.
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h5" gutterBottom>
        Here is a glimpse of what we offer in the education sector to help students to 
        forge a strong foundation for an erudite career.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Textbook Creations" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Solution guide" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Practice Papers" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Lesson Plan Creations" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Curriculum Designing" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Online or Live QA services" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>

      <Box mt={2}>
        <Typography variant="subtitle1" gutterBottom>
        We also hold the capacity to deliver bulk content inshort notice while 
        withholding the highest level of quality in all our deliverables. 
        For we believe that the foundation to build a strong career by students 
        starts at an early age. Hence, we deliver the best quality work within 
        the decided timeline at the beginning of the work commencing.
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="subtitle1" gutterBottom>
        Call us if you have a requirement for developing educational content 
        in all spheres of imparting online education. We ensure that your 
        decision of associating with us will be worthwhile.
        </Typography>
      </Box>
    </Fragment>
  );
}
