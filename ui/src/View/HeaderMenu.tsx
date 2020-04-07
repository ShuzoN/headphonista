import React from "react";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Link,
} from "@material-ui/core";
import TrainIcon from "@material-ui/icons/Train";
import ComputerIcon from "@material-ui/icons/Computer";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import { Menus } from "../Contract";

export const HeaderMenu = (): JSX.Element => {
  return (
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
};
