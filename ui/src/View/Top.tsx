import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { Introduction } from "./Introduction";
import TrainIcon from "@material-ui/icons/Train";
// import ComputerIcon from "@material-ui/icons/Computer";
// import SportsHandballIcon from "@material-ui/icons/SportsHandball";
// import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
// import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";

const useStyle = makeStyles((theme) => ({
  eyecache: {
    width: "100%",
    margin: theme.spacing(0, 0),
    filter: "drop-shadow(0 1mm 0.5rem Gray)",
  },
  introduction: {
    textShadow: "2px 2px 3px Gray;",
    margin: theme.spacing(3, 0),
  },
  introductionMessage: {
    lineHeight: "3.5",
  },
}));

export const Top = (): JSX.Element => {
  const c = useStyle();

  return (
    <>
      <div>
        <img
          src="/img/headphonista_eyecache.png"
          alt="eyecache"
          className={c.eyecache}
        />
      </div>
      <Introduction />
      <Box mt={12}>
        <div id="commuting">
          <TrainIcon />
          <Typography>通勤・通学用</Typography>
        </div>
      </Box>
    </>
  );
};
