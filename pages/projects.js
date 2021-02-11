import React from "react";
import Panel from "../containers/Panel.js";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardContainer from "../containers/CardContainer";

const projects = [
  {
    title: "Work Timer",
    github: "https://github.com/Burnett2k/work-timer",
    description: `While reading some books on productivity, the Pomodoro Timer technique for managing time kept appearing. 
      After trying a few tools, I realized it would be a great learning experience to build one out myself. 
      The goal was to build a pomodoro timer app which runs entirely on the client (browser) using HTML, CSS, 
      and Javascript.  The only dependencies were bootstrap and express.`,
    image: "/static/worktimer.png",
  },
  {
    title: "Work Timer React",
    github: "https://github.com/burnett2k/work-timer-react",
    link: "https://worktimer.xyz",
    description: `After completing the previous work timer app in jQuery, I decided to try and do it in a more modern way.  
    React was becoming really popular and sounded very interesting, so I refactored the entire app to be based off of components.  
    This app is also utilizing redux / local storage for state management as well as a service worker to run the timer in a 
    background thread. All of this is deployed to a digital ocean droplet which uses docker to run the app. Some of the coolest 
    features are dark mode, google sign in to save sessions, and a history page which shows how many timers have been completed in the past.`,
  },
  {
    title: "Workout Manager",
    github: "https://github.com/Burnett2k/workout-manager",
    description: `I have many old sports related injuries / tweaks, so I do physical therapy exercises frequently. I decided to create
       a simple web app that could allow me to keep track of weekly exercises since I'm quite forgetful.  This was early 
       in my career and I was using the MEAN stack (MongoDB, Express, Angular, NodeJs). The project uses a MongoDB 
       backend that is hosted on the MLab free tier.`,
  },
  {
    title: "Bash Practice",
    github: "https://github.com/Burnett2k/BashPractice",
    description: `To be a more well-rounded programmer, I decided to take a deep dive a into scripting and chose to look specifically at Bash. 
       As I learned I decided to create a repo and place examples / lessons within it. I've since used bash for scripting some the
        deployment process for my applications.`,
  },
];

const styles = (theme) => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20,
  },
});

function Projects(props) {
  return (
    <div>
      <CardContainer>
        {projects.map((project, index) => (
          <Panel
            key={index}
            title={project.title}
            github={project.github}
            description={project.description}
            image={project.image}
          />
        ))}
      </CardContainer>
    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
