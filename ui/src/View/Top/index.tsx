import React from "react";
import { makeStyles, Box, Typography, Card } from "@material-ui/core";
import { Introduction } from "./Introduction";
import TrainIcon from "@material-ui/icons/Train";
import ComputerIcon from "@material-ui/icons/Computer";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import { Menus } from "../../Contract";
import { Items } from "./Items";

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
  categoryName: {
    display: "inline",
    verticalAlign: "middle",
    margin: theme.spacing(0, 0.5),
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
      <CategoryTitle categoryName={Menus.Commuting} />
      <Items />
    </>
  );
};

const CategoryTitle = (props: { categoryName: string }): JSX.Element => {
  const c = useStyle();
  const chooseTitleWithIcon = (categoryName: string) => {
    switch (categoryName) {
      case Menus.Commuting:
        return (
          <div id="commuting">
            <TrainIcon className={c.categoryName} />
            <Typography className={c.categoryName}>{categoryName}</Typography>
          </div>
        );
      case Menus.Work:
        return (
          <div id="work">
            <ComputerIcon className={c.categoryName} />
            <Typography className={c.categoryName}>{categoryName}</Typography>
          </div>
        );

      case Menus.Sports:
        return (
          <div id="sports">
            <SportsHandballIcon className={c.categoryName} />
            <Typography className={c.categoryName}>{categoryName}</Typography>
          </div>
        );

      case Menus.Iphone:
        return (
          <div id="iphone">
            <PhoneIphoneIcon className={c.categoryName} />
            <Typography className={c.categoryName}>{categoryName}</Typography>
          </div>
        );

      case Menus.LongBattery:
        return (
          <div id="long-battery">
            <BatteryChargingFullIcon className={c.categoryName} />
            <Typography className={c.categoryName}>{categoryName}</Typography>
          </div>
        );

      default:
        return <></>;
    }
  };

  return <Box mt={12}>{chooseTitleWithIcon(props.categoryName)}</Box>;
};
