/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Panel from "../containers/Panel.js";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardContainer from "../containers/CardContainer";

const projects = [
  {
    title: "Work Timer",
    github: "https://github.com/Burnett2k/work-timer",
    description:
      "After reading some books on productivity, I heard of the Pomodoro Timer technique for managing time. I tried a few tools and they worked fine, but I realized it would be a great learning experience to build one out myself. I set a goal to build a pomodoro timer app which runs entirely on the client (browser) using HTML, Css, and Javascript.  The only dependencies were bootstrap, express, and a few others."
  },
  {
    title: "Work Timer React",
    github: "https://github.com/burnett2k/work-timer-react",
    link: "https://worktimer.xyz",
    description:
      "After completing the previous work timer app in jQuery, I decided to try and do it in a more modern way.  React was becoming really popular so I refactored the entire app into React.  This app is also utilizing redux / local storage for state management as well as a service worker to run the timer in a background thread. All of this is deployed to a digital ocean droplet which uses docker to run the app. Recently a dark mode was added cuz... I like dark mode!"
  },
  {
    title: "Workout Manager",
    github: "https://github.com/Burnett2k/workout-manager"
  },
  {
    title: "Bash Practice",
    github: "https://github.com/Burnett2k/BashPractice"
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
        {projects.map((project, index) => (
          <Panel
            key={index}
            title={project.title}
            github={project.github}
            description={project.description}
          />
        ))}
      </CardContainer>
    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
