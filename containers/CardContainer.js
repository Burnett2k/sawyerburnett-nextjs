import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Card extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        {this.props.children}
      </Paper>
    );
  }
}

export default withStyles(styles)(Card);
