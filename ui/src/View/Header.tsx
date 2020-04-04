import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyle = makeStyles((theme) => ({
  logo: {
    maxHeight: "40px",
  },
  logoBlock: { margin: "0 auto" },
  appBar: {
    background: "#fff",
  },
}));

export const Header = (): JSX.Element => {
  const c = useStyle();

  return (
    <AppBar position="static" className={c.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon color="primary" />
        </IconButton>
        <div className={c.logoBlock}>
          <Button size="large" variant="text" color="inherit" href="/">
            <img
              src="/img/headphonista_logo.png"
              alt="Logo"
              className={c.logo}
            />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
