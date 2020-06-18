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
        color="inherit"
      >
        <ListItemIcon>
          <TrainIcon />
        </ListItemIcon>
        <ListItemText primary={Menus.Commuting} />
      </ListItem>
      <ListItem
        button
        key={Menus.Work}
        component={Link}
        href={"#work"}
        color="inherit"
      >
        <ListItemIcon>
          <ComputerIcon />
        </ListItemIcon>
        <ListItemText primary={Menus.Work} />
      </ListItem>
    </List>
  );
};
