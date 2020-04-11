import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  makeStyles,
  SwipeableDrawer,
  Slide,
  useScrollTrigger,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { HeaderMenu } from "./HeaderMenu";

const useStyle = makeStyles((theme) => ({
  logo: {
    maxHeight: "40px",
  },
  logoBlock: { margin: "0 auto" },
  appBar: {
    background: "#fff",
  },
}));

// https://material-ui.com/components/app-bar/#hide-app-bar
function HideOnScroll(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Header = (): JSX.Element => {
  const c = useStyle();

  return (
    <HideOnScroll>
      <AppBar position="sticky" className={c.appBar}>
        <Toolbar>
          <MenuBar />
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
    </HideOnScroll>
  );
};

interface KeyboardEvent {
  type: string;
  key: string;
}

function MenuBar(): JSX.Element {
  const [openState, setOpenState] = useState(false);

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => {
          setOpenState(!openState);
        }}
      >
        <MenuIcon color="primary" />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={openState}
        onClose={() => {
          setOpenState(false);
        }}
        onOpen={() => {
          setOpenState(true);
        }}
      >
        <div
          onClick={() => setOpenState(false)}
          onKeyDown={() => setOpenState(false)}
        >
          <HeaderMenu />
        </div>
      </SwipeableDrawer>
    </>
  );
}
