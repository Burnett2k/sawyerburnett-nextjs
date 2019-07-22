import React, { Component } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Typography,
  withStyles,
  Link,
  CardMedia
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
            {this.props.github && <Link href={this.props.github}>Github</Link>}
          </Typography>
        </ExpansionPanelDetails>
        {this.props.image && (
          <CardMedia
            image={this.props.image}
            title="Sedona"
            style={{ width: "400px", textAlign: "center" }}
          />
        )}
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(Panel);
