/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, List, ListItem } from "@material-ui/core";
import CardContainer from "../containers/CardContainer";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit
  },
  card: {
    display: "flex"
  }
});

function Reading(props) {
  const { classes } = props;
  let data = [
    {
      href:
        "https://www.goodreads.com/book/show/25744928-deep-work?from_search=true",
      title: " Deep Work",
      author: "Cal Newport"
    },
    {
      href:
        "https://www.goodreads.com/book/show/27968891-site-reliability-engineering?from_search=true",
      title: "Site Reliability Engineering",
      author: "Google"
    },
    {
      href:
        "https://www.goodreads.com/book/show/17255186-the-phoenix-project?ac=1&from_search=true",
      title: "The Phoenix Project",
      author: "Gene Kim, Kevin Behr, George Spafford"
    },
    {
      href:
        "https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer?ac=1&from_search=true",
      title: "The Pragmatic Programmer",
      author: "Andy Hunt and Dave Thomas"
    },
    {
      href: "https://www.goodreads.com/book/show/19288230-scrum",
      title: "Scrum: The Art of Doing Twice the Work in Half the Time",
      author: "Jeff Sutherland"
    },
    {
      href: "https://www.goodreads.com/book/show/23158207-how-google-works",
      title: "How Google Works",
      author: "Eric Schmidt"
    },
    {
      href: "https://www.goodreads.com/book/show/24724602-flash-boys",
      title: "Flash Boys",
      author: "Michael Lewis"
    }
  ];
  return (
    <div>
      <CardContainer>
        <List>
          <ListItem>
            <Typography variant="h4" component="h4">
              Recommended Reading:
            </Typography>
          </ListItem>
          {data.map((item, key) => {
            return (
              <ListItem key={key}>
                <Typography variant="subtitle1">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>{" "}
                  by {item.author}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </CardContainer>
    </div>
  );
}

Reading.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Reading);
