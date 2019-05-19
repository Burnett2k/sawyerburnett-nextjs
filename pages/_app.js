import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { MuiThemeProvider } from "@material-ui/core/styles";
import JssProvider from "react-jss/lib/JssProvider";
import getPageContext from "../src/getPageContext";
import {
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  CssBaseline
} from "@material-ui/core";
import NavigationMenu from "../containers/NavigationMenu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
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
          <title>My page</title>
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
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <AppBar position="static">
              <Toolbar>
                <NavigationMenu />
                <Typography variant="h6" color="inherit">
                  Sawyer Burnett
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default MyApp;
