/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  CardMedia
} from "@material-ui/core";
import CardContainer from "../containers/CardContainer";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit
  },
  card: {
    display: "flex"
  },
  media: {
    width: "220px",
    backgroundSize: "auto"
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
              <CardHeader title="NextJS" />
              <CardContent>
                <CardMedia
                  component="div"
                  className={classes.media}
                  image={
                    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                  }
                ></CardMedia>
                <Typography component="p">
                  One of the leading server-side rendered application
                  frameworks. Some of the features are:
                  <li>Server Rendering</li>
                  <li>CSS-in-JS</li>
                  Learn more: <a href="https://nextjs.org">NextJS</a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs className={classes.paper}>
            <Card>
              <CardHeader title="Material UI" />
              <CardContent>
                <CardMedia
                  component="div"
                  className={classes.media}
                  image={
                    "https://material-ui.com/static/images/material-ui-logo.svg"
                  }
                ></CardMedia>
                <Typography component="p">
                  React components for faster and easier web development. Build
                  your own design system, or start with Material Design. Learn
                  more: <a href="https://material-ui.com">Material-UI</a>
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
