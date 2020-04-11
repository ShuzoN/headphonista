import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { Introduction } from "./Introduction";
import TrainIcon from "@material-ui/icons/Train";
import ComputerIcon from "@material-ui/icons/Computer";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import { Menus } from "../../Contract";
import { Items } from "./Items";
import { scrollRef } from "../../lib/ScrollRef";
import { Item } from "./Contract";

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
      <CategoryItems categoryName={Menus.Commuting} items={commutingItems} />
    </>
  );
};

const CategoryItems = (props: { categoryName: string; items: Item[] }) => {
  return (
    <>
      <CategoryTitle categoryName={props.categoryName} />
      <Items {...props.items} />
    </>
  );
};

const CategoryTitle = (props: { categoryName: string }): JSX.Element => {
  const c = useStyle();

  const categoryNameView = (id: string, categoryName: string) => {
    return (
      <>
        <Box mt={12}>
          <div id={id} ref={scrollRef()}>
            <TrainIcon className={c.categoryName} />
            <Typography className={c.categoryName}>{categoryName}</Typography>
          </div>
        </Box>
      </>
    );
  };

  const chooseTitle = (categoryName: string) => {
    switch (categoryName) {
      case Menus.Commuting:
        return categoryNameView("commuting", categoryName);
      case Menus.Work:
        return categoryNameView("work", categoryName);

      case Menus.Sports:
        return categoryNameView("sports", categoryName);

      case Menus.Iphone:
        return categoryNameView("iphone", categoryName);

      case Menus.LongBattery:
        return categoryNameView("long-battery", categoryName);

      default:
        return <></>;
    }
  };

  return <>{chooseTitle(props.categoryName)}</>;
};

const commutingItems: Item[] = [
  {
    name: "ag TWS02R",
    url: "https://amzn.to/2X9Bce8",
    imgPath: "/img/ag.jpg",
    price: 4000,
    salesPoints: ["msg1", "msg2", "msg3"],
  },
  {
    name: "SONY MDR-M1ST",
    url: "https://amzn.to/2UJHkbq",
    imgPath: "/img/sony.png",
    price: 30000,
    salesPoints: ["msg1", "msg2", "msg3"],
  },
];
