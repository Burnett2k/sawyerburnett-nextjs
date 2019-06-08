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
import Link from "next/link";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
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
        <Grid container justify="center">
          <Grid item>
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
          <Grid item>
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
        <p>Recommended Reading:</p>
        <ul>
          <li>
            {" "}
            <a
              href="https://www.goodreads.com/book/show/25744928-deep-work?from_search=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deep Work
            </a>{" "}
            by Cal Newport
          </li>
          <li>
            {" "}
            <a
              href="https://www.goodreads.com/book/show/27968891-site-reliability-engineering?from_search=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site Reliability Engineering
            </a>{" "}
            by Google
          </li>
          <li>
            {" "}
            <a
              href="https://www.goodreads.com/book/show/17255186-the-phoenix-project?ac=1&from_search=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Phoenix Project
            </a>{" "}
            by Gene Kim, Kevin Behr, George Spafford
          </li>
          <li>
            {" "}
            <a
              href="https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer?ac=1&from_search=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Pragmatic Programmer
            </a>{" "}
            by Andy Hunt and Dave Thomas
          </li>
          <li>
            {" "}
            <a
              href="https://www.goodreads.com/book/show/19288230-scrum"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scrum: The Art of Doing Twice the Work in Half the Time
            </a>{" "}
            by Jeff Sutherland
          </li>
          <li>
            {" "}
            <a
              href="https://www.goodreads.com/book/show/23158207-how-google-works"
              target="_blank"
              rel="noopener noreferrer"
            >
              How Google Works
            </a>{" "}
            by Eric Schmidt
          </li>
          <li>
            {" "}
            <a
              href="https://www.goodreads.com/book/show/24724602-flash-boys"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flash Boys
            </a>{" "}
            by Michael Lewis
          </li>
        </ul>
      </CardContainer>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
