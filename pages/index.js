/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid
} from "@material-ui/core";
import CardContainer from "../containers/CardContainer";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <CardContainer>
        <Grid container justify="center">
          <Grid item>
            <Card>
              <CardMedia
                image={"/static/sedona.jpg"}
                title="Sedona"
                className={classes.media}
              />
              <CardContent>
                <Typography variant="subtitle1">
                  I'm a sofware engineer currently located in the Phoenix area.
                  At the moment I am enjoying working with React and Nodejs
                  applications. Some of my interests are load testing, user
                  experience, design philosophy, unit testing, and IoT. I enjoy
                  working at misson-driven companies which attempt to make the
                  world a better place.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContainer>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
