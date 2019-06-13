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
        <Typography variant="subtitle1">Recommended Reading:</Typography>
        <Typography variant="subtitle1">
          <a
            href="https://www.goodreads.com/book/show/25744928-deep-work?from_search=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deep Work
          </a>{" "}
          by Cal Newport
        </Typography>
        <Typography variant="subtitle1">
          <a
            href="https://www.goodreads.com/book/show/27968891-site-reliability-engineering?from_search=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site Reliability Engineering
          </a>{" "}
          by Google{" "}
        </Typography>
        <Typography variant="subtitle1">
          <a
            href="https://www.goodreads.com/book/show/17255186-the-phoenix-project?ac=1&from_search=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Phoenix Project
          </a>{" "}
          by Gene Kim, Kevin Behr, George Spafford
        </Typography>
        <Typography variant="subtitle1">
          <a
            href="https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer?ac=1&from_search=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Pragmatic Programmer
          </a>{" "}
          by Andy Hunt and Dave Thomas{" "}
        </Typography>
        <Typography variant="subtitle1">
          <a
            href="https://www.goodreads.com/book/show/19288230-scrum"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scrum: The Art of Doing Twice the Work in Half the Time
          </a>{" "}
          by Jeff Sutherland{" "}
        </Typography>
        <Typography variant="subtitle1">
          <a
            href="https://www.goodreads.com/book/show/23158207-how-google-works"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Google Works
          </a>{" "}
          by Eric Schmidt{" "}
        </Typography>
        <Typography variant="subtitle1">
          <a
            href="https://www.goodreads.com/book/show/24724602-flash-boys"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flash Boys
          </a>{" "}
          by Michael Lewis
        </Typography>
      </CardContainer>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
