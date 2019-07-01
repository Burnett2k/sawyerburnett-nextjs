import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Drawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import {
  Home,
  Person,
  LaptopMac,
  GroupAdd,
  ChromeReaderMode
} from "@material-ui/icons";
import Link from "next/link";

const ButtonLink = ({ className, href, hrefAs, children, prefetch }) => (
  <Link href={href} as={hrefAs} prefetch>
    <a className={className}>{children}</a>
  </Link>
);

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 12
  },
  list: {
    width: "auto"
  }
};

class NavigationMenu extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({
      [side]: open
    });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    const list = (
      <List component="nav">
        <ListItem button component={ButtonLink} href={"/"}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={ButtonLink} href={"/about"}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={ButtonLink} href={"/projects"}>
          <ListItemIcon>
            <LaptopMac />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={ButtonLink} href={"/consulting"}>
          <ListItemIcon>
            <GroupAdd />
          </ListItemIcon>
          <ListItemText primary="Consulting" />
        </ListItem>
        <ListItem button component={ButtonLink} href={"/reading"}>
          <ListItemIcon>
            <ChromeReaderMode />
          </ListItemIcon>
          <ListItemText primary="Reading" />
        </ListItem>
      </List>
    );

    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={this.toggleDrawer("left", true)}
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div role="presentation" onClick={this.toggleDrawer("left", false)}>
            {list}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(NavigationMenu);
