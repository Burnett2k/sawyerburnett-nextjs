/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core";
import CardContainer from "../containers/CardContainer";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit
  },
  card: {
    display: "flex"
  }
});

function About(props) {
  const { classes } = props;
  return (
    <div>
      <CardContainer>
        <Typography variant="h5" component="h3">
          About
        </Typography>
        <Typography component="p">
          This website was written using the following technology:
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs className={classes.paper}>
            <Card>
              <CardHeader title="React-Static" />
              <CardContent>
                <Typography component="p">
                  React-Static is a fast, lightweight, and powerful progressive
                  static site generator based on React and its ecosystem. It
                  resembles the simplicity and developer experience you're used
                  to in tools like Create React App and has been carefully
                  designed for performance, flexibility, and user/developer
                  experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs className={classes.paper}>
            <Card>
              <CardHeader title="Material UI" />
              <CardContent>
                <Typography component="p">
                  React components for faster and easier web development. Build
                  your own design system, or start with Material Design.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContainer>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
