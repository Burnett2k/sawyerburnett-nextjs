/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
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
                <Typography component="p">
                  I am a programmer currently working on React and Node JS
                  applications, but I do enjoy dabbling in other technologies
                  quite often. Some of my current interests are material design,
                  page rendering performance, user experience, unit testing, and
                  solving problems.
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
