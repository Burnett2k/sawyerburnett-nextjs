/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";
import CardContainer from "../containers/CardContainer";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
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
                  I'm a sofware engineer by trade who loves to tinker and build
                  new things. At the moment I am enjoying working on backend and
                  infrastructure technologies. Some of my interests are load
                  testing, cloud design patterns, building scalable
                  applications, generative art, AI, and IoT. I enjoy working at
                  misson-driven companies which attempt to make the world a
                  better place. If I'm learning at my job, then I'm happy! In my
                  free time, I'm an avid hiker, cyclist, traveler, and rookie
                  drone operator. In the near future, I plan to get a commercial
                  drone license so I can begin selling drone footage online.
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
