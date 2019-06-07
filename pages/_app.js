import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import JssProvider from "react-jss/lib/JssProvider";
import getPageContext from "../src/getPageContext";
import {
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  CssBaseline,
  IconButton
} from "@material-ui/core";
import NavigationMenu from "../containers/NavigationMenu";
import GitHub from "../components/GitHub";

const styles = {
  grow: {
    flexGrow: 1
  },
  toolbarButtons: {
    marginLeft: "auto"
  }
};

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, classes } = this.props;
    return (
      <Container>
        <Head>
          <title>Sawyer Burnett</title>
        </Head>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline>
              <div className={classes.grow}>
                <AppBar position="static">
                  <Toolbar>
                    <NavigationMenu />
                    <Typography variant="h6" color="inherit">
                      Sawyer Burnett
                    </Typography>

                    <IconButton
                      color="secondary"
                      color="inherit"
                      aria-label="Menu"
                      className={classes.toolbarButtons}
                    >
                      <GitHub />
                    </IconButton>
                  </Toolbar>
                </AppBar>
              </div>
              <Drawer />
              {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
              <Component pageContext={this.pageContext} {...pageProps} />
            </CssBaseline>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default withStyles(styles)(MyApp);
