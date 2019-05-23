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
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

class Index extends React.Component {
  render() {
    return (
      <CardContainer>
        <Grid container justify="center">
          <Grid item>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  I'm a sofware engineer currently located in the Phoenix area.
                  At the moment I am enjoying working with React and Nodejs
                  applications. Some of my current interests are load testing,
                  user experience, design philosophy, accessibility, and IoT.
                  Also, I like to help people which is why I work at Solera
                  Health.
                </Typography>
                <CardMedia
                  image={"/static/whitney-summit.jpg"}
                  title="Mt Whitney Summit"
                />
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
