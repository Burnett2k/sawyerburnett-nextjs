/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Panel from "../containers/Panel.js";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardContainer from "../containers/CardContainer";

const projects = [
  {
    id: 0,
    title: "Work Timer",
    link: "https://github.com/Burnett2k/work-timer",
    description:
      "After reading some books on productivity, I heard of the Pomodoro Timer technique for managing time. I tried a few tools and they worked fine, but I realized it would be a great learning experience to build one out myself. I set a goal to build a pomodoro timer app which runs entirely on the client (browser) using HTML, Css, and Javascript.  The only dependencies were bootstrap, express, and a few others."
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
        {projects.map(project => (
          <React.Fragment>
            <Panel
              key={project.id}
              title={project.title}
              link={project.link}
              description={project.description}
            />
          </React.Fragment>
        ))}
      </CardContainer>
    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
