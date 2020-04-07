import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  makeStyles,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import TrainIcon from "@material-ui/icons/Train";
import ComputerIcon from "@material-ui/icons/Computer";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import { Menus } from "../Contract";

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
  );
};

interface KeyboardEvent {
  type: string;
  key: string;
}

function MenuBar(): JSX.Element {
  const [openState, setOpenState] = useState(false);

  const list = (
    <List>
      <ListItem>
        <Typography variant="caption">使い方を選んでください</Typography>
      </ListItem>
      <ListItem
        button
        key={Menus.Commuting}
        component={Link}
        href={"#commuting"}
      >
        <ListItemIcon>
          <TrainIcon />
        </ListItemIcon>
        <ListItemText primary={Menus.Commuting} />
      </ListItem>
      <ListItem button key={Menus.Work} component={Link} href={"#work"}>
        <ListItemIcon>
          <ComputerIcon />
        </ListItemIcon>
        <ListItemText primary={Menus.Work} />
      </ListItem>
      <ListItem button key={Menus.Sports} component={Link} href={"#sports"}>
        <ListItemIcon>
          <SportsHandballIcon />
        </ListItemIcon>
        <ListItemText primary={Menus.Sports} />
      </ListItem>
      <ListItem button key={Menus.Iphone} component={Link} href={"#iphone"}>
        <ListItemIcon>
          <PhoneIphoneIcon />
        </ListItemIcon>
        <ListItemText primary={Menus.Iphone} />
      </ListItem>
      <ListItem
        button
        key={Menus.LongBattery}
        component={Link}
        href={"#long-battery"}
      >
        <ListItemIcon>
          <BatteryChargingFullIcon />
        </ListItemIcon>
        <ListItemText primary={Menus.LongBattery} />
      </ListItem>
    </List>
  );

  const onClick = () => setOpenState(!openState);

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => onClick()}
      >
        <MenuIcon color="primary" />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={openState}
        onClose={() => onClick()}
        onOpen={() => onClick()}
      >
        {list}
      </SwipeableDrawer>
    </>
  );
}
