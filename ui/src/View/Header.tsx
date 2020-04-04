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
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import TrainIcon from "@material-ui/icons/Train";
import ComputerIcon from "@material-ui/icons/Computer";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";

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

enum Menus {
  Commuting = "通勤通学用",
  Work = "作業用",
  Sports = "スポーツ",
  Iphone = "iPhoneユーザ",
  LongBattery = "とにかく充電持ちがいい",
}

function MenuBar(): JSX.Element {
  const [openState, setOpenState] = useState(false);

  const list = (
    <List>
      <ListItem>
        <Typography variant="caption">使い方を選んでください</Typography>
      </ListItem>
      <ListItem button key={Menus.Commuting}>
        <ListItemIcon>
          <TrainIcon />
        </ListItemIcon>
        <ListItemText primary={Menus.Commuting} />
      </ListItem>
      <ListItem button key={Menus.Work}>
        <ListItemIcon>
          <ComputerIcon />
        </ListItemIcon>
        <ListItemText primary={Menus.Work} />
      </ListItem>
      <ListItem button key={Menus.Sports}>
        <ListItemIcon>
          <SportsHandballIcon />
        </ListItemIcon>
        <ListItemText primary={Menus.Sports} />
      </ListItem>
      <ListItem button key={Menus.Iphone}>
        <ListItemIcon>
          <PhoneIphoneIcon />
        </ListItemIcon>
        <ListItemText primary={Menus.Iphone} />
      </ListItem>
      <ListItem button key={Menus.LongBattery}>
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
