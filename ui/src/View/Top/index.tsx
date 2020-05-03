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
  category: {
    padding: theme.spacing(3, 0),
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
      <CategoryItems categoryName={Menus.Work} items={commutingItems} />
      <CategoryItems categoryName={Menus.Sports} items={commutingItems} />
      <CategoryItems categoryName={Menus.Iphone} items={commutingItems} />
      <CategoryItems categoryName={Menus.LongBattery} items={commutingItems} />
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
  const chooseTitleWithIcon = (categoryName: string) => {
    switch (categoryName) {
      case Menus.Commuting:
        return (
          <div id="commuting" ref={scrollRef()} className={c.category}>
            <TrainIcon className={c.categoryName} />
            <Typography className={c.categoryName}>{categoryName}</Typography>
          </div>
        );
      case Menus.Work:
        return (
          <div id="work" ref={scrollRef()} className={c.category}>
            <ComputerIcon className={c.categoryName} />
            <Typography className={c.categoryName}>{categoryName}</Typography>
          </div>
        );

      case Menus.Sports:
        return (
          <div id="sports" ref={scrollRef()} className={c.category}>
            <SportsHandballIcon className={c.categoryName} />
            <Typography className={c.categoryName}>{categoryName}</Typography>
          </div>
        );

      case Menus.Iphone:
        return (
          <div id="iphone" ref={scrollRef()} className={c.category}>
            <PhoneIphoneIcon className={c.categoryName} />
            <Typography className={c.categoryName}>{categoryName}</Typography>
          </div>
        );

      case Menus.LongBattery:
        return (
          <div id="long-battery" ref={scrollRef()} className={c.category}>
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

const commutingItems: Item[] = [
  {
    name: "Anker Soundcore Liberty Neo",
    url: "https://amzn.to/2YfCl4r",
    imgPath: "/img/anker-sound-core-neo.jpg",
    price: 5000,
    salesPoints: [
      "アマゾンイヤホンランキング5位",
      "ankerは電池の名門メーカー。",
      "完全防水なので突然の雨も大丈夫",
      "満充電で5時間聴けるから通勤時は楽々",
      "音質もよく買って後悔しないメーカーです",
    ],
  },
  {
    name: "AVIOT TE-D01g",
    url: "https://amzn.to/2WcCbbz",
    imgPath: "/img/aviot_te-d01g.png",
    price: 8500,
    salesPoints: [
      "9時間の連続再生で充電が切れる心配ゼロ!",
      "完全防水でお風呂に落としても壊れません",
      "超コンパクトなケースだから生活に馴染みやすい",
      "type C対応なのも嬉しいポイント",
      "6人以上の知人にお勧めして好評のクオリティ",
    ],
  },
];
