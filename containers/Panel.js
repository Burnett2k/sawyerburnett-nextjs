import React, { Component } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Typography,
  withStyles,
  Link
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%"
  }
});

class Panel extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" component="h5">
            {this.props.title}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {this.props.description}{" "}
            {this.props.link && <Link href={this.props.link}>Github</Link>}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(Panel);
