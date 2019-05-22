/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Panel from "../containers/Panel.js";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardContainer from "../containers/CardContainer";
import Link from "next/link";

const projects = [
  {
    id: 0,
    title: "Work Timer",
    link: "https://github.com/Burnett2k/work-timer"
  },
  {
    id: 1,
    title: "Work Timer React",
    link: "https://worktimer.xyz"
  },
  {
    id: 2,
    title: "Workout Manager",
    link: "https://github.com/Burnett2k/workout-manager"
  },
  {
    id: 3,
    title: "Bash Practice",
    link: "https://github.com/Burnett2k/BashPractice"
  }
];

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

function Projects(props) {
  const { classes } = props;

  return (
    <div>
      <CardContainer>
        <h1>Projects</h1>
        <ul>
          {projects.map(project => (
            <React.Fragment>
              <Panel
                key={project.id}
                title={project.title}
                link={project.link}
              />
            </React.Fragment>
          ))}
        </ul>
      </CardContainer>
    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
