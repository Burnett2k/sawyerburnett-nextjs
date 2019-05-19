import { SheetsRegistry } from "jss";
import {
  createMuiTheme,
  createGenerateClassName
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#00838F" },
    secondary: { main: "#8fa3ad" }
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiCard: {
      root: { minWidth: 300, maxWidth: 400 }
    },
    MuiCardMedia: {
      root: { height: 300, maxHeight: 300 }
    }
  },
  typography: {
    useNextVariants: true
  }
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  };
}

let pageContext;

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
