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

function Consulting(props) {
  const { classes } = props;

  return (
    <div>
      <CardContainer>
        <Typography variant="h5" component="h3">
          Consulting Work
        </Typography>
        <Typography component="p">
          I am open to occasional consulting and side projects related to agile
          / scrum processes, React, or NodeJS.
        </Typography>
      </CardContainer>
    </div>
  );
}

Consulting.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Consulting);
