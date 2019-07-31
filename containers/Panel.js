import React, { Component } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  withStyles,
  Link,
  CardMedia,
  Grid
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%"
  },
  media: {
    marginBottom: "25px",
    height: "450px"
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
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={6}>
              <CardMedia
                image={this.props.image}
                title="Sedona"
                className={classes.media}
              />
            </Grid>
          </Grid>
        )}
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(Panel);
